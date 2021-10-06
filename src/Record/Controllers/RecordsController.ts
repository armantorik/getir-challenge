import { NextFunction, Request, Response } from 'express';
import { Record } from '../Interfaces/RecordsInterface';
import RecordService from '../Services/RecordsService';
import RecordsPostRequest from '../../Record/Controllers/Requests/RecordsPostRequest';
import ErrorHandler from "../Middlewares/ErrorHandler";

class RecordsController {
  public recordService = new RecordService();

  public findRecords = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const recordsPostRequest: RecordsPostRequest = req.body;
      const findRecordsData: Record[] = await this.recordService.findRecords(recordsPostRequest);

      res.status(200).send({ code: 0, msg: 'Success', records: findRecordsData });
    } catch (error) {
      ErrorHandler(error, res, next);

    }
  };
}

export default RecordsController;
