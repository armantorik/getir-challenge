import { HttpException } from './HttpException';
import { StatusCodes } from 'http-status-codes';

export class RecordNotFoundException extends HttpException {
  public readonly code = 1;

  constructor() {
    super(StatusCodes.NOT_FOUND, 'Record not found!');
  }
}
