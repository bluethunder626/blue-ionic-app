import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordsQuery, RecordsService, IRecordStore } from './../../states/records';
import { generateIRecordStore } from './../add/add.util';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public records$: Observable<IRecordStore[]>;

  constructor(
    private recordsQuery: RecordsQuery,
    private recordsService: RecordsService,
  ) { }

  ngOnInit() {
    this.records$ = this.recordsQuery.selectAll();
  }

  onClickRecord(id: string) {
    console.log(id);
  }

  onClickAddMulti() {
    // add 10000 records
    generateIRecordStore(10000).then(r => this.recordsService.addRecords(r));
  }
}
