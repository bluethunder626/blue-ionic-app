import { guid } from '@datorama/akita';
import { IRecordStore } from './../../states/records/records.model';
import { Record } from './../../states/records';
import { randomString, randomNumber } from '../../utils/random.utils';

export const createFakeRecord = () => new Promise<Record>((resolve) => {
  const record: Record = {
    amount: randomNumber(100),
    description: randomString(5),
    datetime: new Date(),
  };

  return resolve(record);
});

/**
 * @param n number of records
 */
export const generateRecords = async (n: number) => {
  const records: Record[] = [];

  while (n > 0) {
    records.push(await createFakeRecord());
    n--;
  }

  return records;
};

export const createFakeIRecordStore = () => new Promise<IRecordStore>((resolve) => {
  const record: IRecordStore = {
    id: guid(),
    amount: randomNumber(100),
    description: randomString(5),
    datetime: new Date(),
  };

  return resolve(record);
});

/**
 * @param n number of records
 */
export const generateIRecordStore = async (n: number) => {
  const records: IRecordStore[] = [];

  while (n > 0) {
    // const r =;
    records.push(await createFakeIRecordStore());
    n--;
  }

  return records;
};
