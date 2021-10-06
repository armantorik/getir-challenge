import request from 'supertest';
import App from '../../../app';
import RecordsRoute from '../../Routes/RecordsRoute';
import RecordsModel from '../../Models/RecordsModel';
import { v4 as uuidv4 } from 'uuid';

const recordsRoute = new RecordsRoute();
const app = new App([recordsRoute]);

beforeEach(async () => {
  await RecordsModel.deleteMany();

  for (let i = 0; i < 20; i++) {
    await RecordsModel.create({
      createdAt: Date.now(),
      totalCount: i * 40 + 21,
      key: uuidv4(),
    });
  }
});

afterAll(async () => {
  await RecordsModel.deleteMany();
  //await app.close();
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Records Endpoint', () => {
  describe('[POST] /', () => {
    it('should retrieve records between given filters', async () => {
      // given
      const body = {
        startDate: '2000-11-21',
        endDate: '2200-11-21',
        minCount: 200,
        maxCount: 22322,
      };

      // when

      const response = await request(app.getServer()).post(`${recordsRoute.path}`).send(body);

      // then

      expect(response.status).toBe(200);
      expect(response.body.code).toBe(0);
      expect(response.body.msg).toBe('Success');
      expect(response.body.records).toBeInstanceOf(Array);
      expect(response.body.records[0]).toHaveProperty('key');
      //TODO expect(response.body.records[0].createdAt).toBeGreaterThan();
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

  //TODO totalCount test
  it('should throw Record Not Found Exception when no document matching given filters', async () => {
    // given
    const body = {
      startDate: '2000-11-21',
      endDate: '2001-11-21',
      minCount: 200,
      maxCount: 22322,
    };

    // when

    const response = await request(app.getServer()).post(`${recordsRoute.path}`).send(body);

    // then

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ code: 1, msg: 'Record not found!' });
  });
});
