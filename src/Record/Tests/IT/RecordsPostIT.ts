import request from 'supertest';
import App from '../../../app';
import RecordsRoute from '../../Routes/RecordsRoute';
import { DateTime } from 'luxon';

let app;
let recordsRoute;

beforeEach(async () => {
  recordsRoute = new RecordsRoute();
  app = new App([recordsRoute]);
});
afterEach(async () => {
  await app.disconnectFromDatabase();
});

describe('Testing Records Endpoint', () => {
  describe('[POST] /', () => {
    it('should retrieve records between given valid filters', async () => {
      // given
      const body = {
        startDate: '2015-11-21',
        endDate: '2200-11-21',
        minCount: 200,
        maxCount: 22322,
      };
      const startDateFormatted = DateTime.fromISO(body.startDate);
      const endDateFormatted = DateTime.fromISO(body.endDate);

      // when

      const response = await request(app.getServer()).post(`${recordsRoute.path}`).send(body);

      // then

      expect(response.status).toBe(200);
      expect(response.body.code).toBe(0);
      expect(response.body.msg).toBe('Success');
      expect(response.body.records).toBeInstanceOf(Array);
      expect(response.body.records[0]).toHaveProperty('key');

      const createdAtFormatted = DateTime.fromISO(response.body.records[0].createdAt);

      expect(createdAtFormatted.ts).toBeGreaterThanOrEqual(startDateFormatted.ts);
      expect(createdAtFormatted.ts).toBeLessThanOrEqual(endDateFormatted.ts);
      expect(response.body.records[0]).toHaveProperty('totalCount');
    });
  });

  it('should throw validation error if any of body fields are missing', async () => {
    // given
    const body = {
      //startDate:"2000-11-21",
      endDate: '2200-11-21',
      minCount: 200,
      maxCount: 22322,
    };

    // when

    const response = await request(app.getServer()).post(`${recordsRoute.path}`).send(body);

    // then

    expect(response.status).toBe(400);
    expect(response.text).toBe('Error validating request body. "startDate" is required.');
  });

  it('should throw Record Not Found Exception when no document matching given filters', async () => {
    // given
    const body = {
      startDate: '2000-11-21',
      endDate: '2001-11-21',
      minCount: 200,
      maxCount: 222,
    };

    // when

    const response = await request(app.getServer()).post(`${recordsRoute.path}`).send(body);

    // then

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ code: 1, msg: 'Record not found!' });
  });
});
