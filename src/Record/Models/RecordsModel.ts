import { model, Schema, Document } from 'mongoose';
import { Record } from '../Interfaces/RecordsInterface';

const recordSchema: Schema = new Schema({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  totalCount: {
    type: Number,
    required: true,
  },
});

const RecordModel = model<Record & Document>('Record', recordSchema);

export default RecordModel;
export type RecordDocument = Record & Document;
