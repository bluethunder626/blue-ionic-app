import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';

import { RecordsStore } from './records.store';
import { Record, createRecord, IRecordStore } from './records.model';

@Injectable({ providedIn: 'root' })
export class RecordsService {

  constructor(private recordsStore: RecordsStore) { }

  addRecord(record: Record) {
    const data = createRecord(record);
    this.recordsStore.add(data);
  }

  addRecords(records: IRecordStore[]) {
    this.recordsStore.add(records);
  }

  removeRecord(id: ID) {
    this.recordsStore.remove(id);
  }
}
