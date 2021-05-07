import { guid } from '@datorama/akita';

export interface Record {
  amount: number;
  description: string;
  date: string;
  time: string;
}

export interface IRecordStore extends Record {
  id: string;
}

export const createRecord = (record: Partial<Record>) => ({
  id: guid(),
  ...record
} as IRecordStore);
