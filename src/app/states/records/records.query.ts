import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { RecordsStore, RecordsState } from './records.store';

@Injectable({ providedIn: 'root' })
@QueryConfig({
  sortBy: 'datetime',
  sortByOrder: Order.ASC
})
export class RecordsQuery extends QueryEntity<RecordsState> {

  constructor(protected store: RecordsStore) {
    super(store);
  }
}
