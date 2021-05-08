import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordsQuery } from './../../states/records/records.query';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  totalThisMonth$: Observable<number> = null;
  biggestThisMonth$: Observable<number> = null;

  constructor(
    private recordsQuery: RecordsQuery,
  ) { }

  ngOnInit() {
    this.totalThisMonth$ = this.recordsQuery.getTotalThisMonth$;
    this.biggestThisMonth$ = this.recordsQuery.getBiggestThisMonth$;
  }

}
