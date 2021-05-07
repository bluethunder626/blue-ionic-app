import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { RecordsStore, RecordsState } from './records.store';

@Injectable({ providedIn: 'root' })
export class RecordsQuery extends QueryEntity<RecordsState> {

  constructor(protected store: RecordsStore) {
    super(store);
  }
}
