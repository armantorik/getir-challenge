import RecordsPostRequest from '../Controllers/Requests/RecordsPostRequest';
import { Record } from '../Interfaces/RecordsInterface';
import RecordsRepository from '../Repository/RecordsRepository';
import { RecordNotFoundException } from '../Exceptions/RecordNotFoundException';

class RecordService {
  public recordRepository = new RecordsRepository();

  public async findRecords(recordsPostRequest: RecordsPostRequest): Promise<Record[]> {
    const recordsData: Record[] = await this.recordRepository.findRecords(recordsPostRequest);

    if (recordsData.length == 0) {
      throw new RecordNotFoundException();
    }
    return recordsData;
  }
}

export default RecordService;
