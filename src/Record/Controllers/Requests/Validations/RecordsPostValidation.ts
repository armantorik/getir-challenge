import * as Extension from '@joi/date';
import Joi from 'joi';

const joiDate = Joi.extend(Extension.default);
export const RecordsPostValidationSchema = joiDate.object({
  startDate: joiDate.date().format('YYYY-MM-DD').required(),
  endDate: joiDate.date().format('YYYY-MM-DD').required(),
  minCount: joiDate.number().required(),
  maxCount: joiDate.number().required(),
});
