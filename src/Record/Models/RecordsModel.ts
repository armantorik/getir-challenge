import { model, Schema, Document } from 'mongoose';
import { Record } from '../Interfaces/RecordsInterface';

const recordSchema: Schema = new Schema({
  key: {
    type: String,
    required: true,
    //unique: true,
  },
  value: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  counts: {
    type: Array,
    required: true,
  },
});

const RecordModel = model<Record & Document>('Record', recordSchema);

export default RecordModel;
export type RecordDocument = Record & Document;
