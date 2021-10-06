export interface Record {
  totalCount: number;
  _id: string;
  key: string;
  createdAt: Date;
  counts: Array<number>;
}
