import { HttpException } from './HttpException';
import { StatusCodes } from 'http-status-codes';

export class MongoException extends HttpException {
  public readonly code = 2;

  constructor() {
    super(StatusCodes.INTERNAL_SERVER_ERROR, 'Something wrong with MongoDB server!');
  }
}
