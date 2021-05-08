import { Injectable } from '@angular/core';
import { IRecordStore } from './records.model';
import { EntityState, EntityStore, StoreConfig} from '@datorama/akita';

export type RecordsState = EntityState<IRecordStore>;

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'records', idKey: 'id' })
export class RecordsStore extends EntityStore<RecordsState> {

  constructor() {
    super();
  }
}
