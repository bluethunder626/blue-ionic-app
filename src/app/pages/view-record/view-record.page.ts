import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { RecordsQuery, IRecordStore } from './../../states/records';

@Component({
  selector: 'app-view-record',
  templateUrl: './view-record.page.html',
  styleUrls: ['./view-record.page.scss'],
})
export class ViewRecordPage implements OnInit {
  record$: Observable<IRecordStore> = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private recordsQuery: RecordsQuery,
  ) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe((d) => {
        if (d.id) {
          const data = this.recordsQuery.getEntity(d.id);
          console.log(data);

          this.record$ = this.recordsQuery.selectEntity(d.id);
        } else {
          this.navController.back();
        }
      });
  }
}
