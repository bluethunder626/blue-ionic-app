import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { isThisMonth } from 'date-fns';
import { RecordsStore, RecordsState } from './records.store';

@Injectable({ providedIn: 'root' })
@QueryConfig({
  sortBy: 'datetime',
  sortByOrder: Order.ASC
})
export class RecordsQuery extends QueryEntity<RecordsState> {
  getTotalThisMonth$
    = this.selectAll({
      filterBy: r => isThisMonth(new Date(r.datetime))
    }).pipe(
      map(records => {
        let total = 0;
        records.forEach(r => total += r.amount);
        return total;
      })
    );

  getBiggestThisMonth$
    = this.selectAll({
      filterBy: r => isThisMonth(new Date(r.datetime)),
      sortBy: 'amount',
      sortByOrder: Order.DESC,
    }).pipe(
      map(r => r.length > 0 ? r[0].amount : 0)
    );

  constructor(protected store: RecordsStore) {
    super(store);
  }
}
