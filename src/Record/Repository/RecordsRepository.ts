import { Record } from '../Interfaces/RecordsInterface';
import RecordModel from '../Models/RecordsModel';
import RecordsPostRequest from '../Controllers/Requests/RecordsPostRequest';
import { MongoException } from '../Exceptions/MongoException';

class RecordsRepository {
  public recordModel = RecordModel;

  public async findRecords(recordsPostRequest: RecordsPostRequest): Promise<Record[]> {
    const { startDate, endDate, minCount, maxCount } = recordsPostRequest;

    try {
      const records: Record[] = await this.recordModel.aggregate([
        {
          $match: {
            createdAt: { $gte: startDate, $lte: endDate },
          },
        },
        {
          $addFields: {
            totalCount: { $sum: '$counts' },
          },
        },
        {
          $match: {
            totalCount: { $gte: minCount, $lte: maxCount },
          },
        },
        { $project: { counts: 0, value: 0, _id: 0 } }, // Return all but the specified fields
      ]);

      return records;

    } catch (error) {
      throw new MongoException();
    }
  }
}

export default RecordsRepository;
