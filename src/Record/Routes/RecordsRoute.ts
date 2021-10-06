import { Router } from 'express';
import RecordsController from '../Controllers/RecordsController';
import { Routes } from '../Interfaces/RoutesInterface';
import { createValidator } from 'express-joi-validation';
import { RecordsPostValidationSchema } from '../Controllers/Requests/Validations/RecordsPostValidation';

const validator = createValidator({});

class RecordsRoute implements Routes {
  public path = '/';
  public router = Router();
  public recordsController = new RecordsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validator.body(RecordsPostValidationSchema), this.recordsController.findRecords);
  }
}

export default RecordsRoute;
