import { Record } from '../Interfaces/RecordsInterface';
import RecordModel from '../Models/RecordsModel';
import RecordsPostRequest from '../Controllers/Requests/RecordsPostRequest';
import { v4 as uuidv4 } from 'uuid';

class RecordsRepository {
  public recordModel = RecordModel;

  public async findRecords(recordsPostRequest: RecordsPostRequest): Promise<Record[]> {
    const { startDate, endDate, minCount, maxCount } = recordsPostRequest;

    const records: Record[] = await this.recordModel.find(
      {
        createdAt: { $gte: startDate, $lte: endDate },
        totalCount: { $gt: minCount, $lt: maxCount },
      },
      { _id: 0, createdAt: 1, totalCount: 1, key: 1 },
    ); // exclude _id in response

    //const rec = await this.recordModel.find();
    //console.log(rec)
    //await this.addData();
    return records;
  }

  public async addData() {
    // used to create documents in db
    const sample = new this.recordModel({ createdAt: Date.now(), totalCount: 21, key: uuidv4() });
    await sample.save();
  }

  public async deleteData() {
    await this.recordModel.deleteMany();
  }
}

export default RecordsRepository;
