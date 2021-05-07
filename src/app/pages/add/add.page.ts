import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { format } from 'date-fns';
import { RecordsService, Record } from './../../states/records';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public addForm = new FormGroup({});
  public addAnother = false;

  constructor(
    private formBuilder: FormBuilder,
    private recordsService: RecordsService,
    private toastController: ToastController,
    private navController: NavController,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public onClickAdd() {
    if (this.addForm.valid) {
      const getFormValue = (key: string) => this.addForm.get(key).value;

      const record: Record = {
        amount: getFormValue('amount'),
        description: getFormValue('description'),
        date: getFormValue('date'),
        time: getFormValue('time'),
      };

      this.recordsService.addRecord(record);
      this.showToast();

      if (this.addAnother) {
        this.initForm();
      } else {
        this.navController.back();
      }
    }
  }

  private async showToast() {
    const toast = await this.toastController.create({
      message: 'Record added!',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  private initForm() {
    this.addAnother = false;

    this.addForm
      = this.formBuilder.group({
        amount: [
          0,
          Validators.compose([
            Validators.required,
            (control: FormControl) => {
              let validation = null;
              if (control.value < 0) {
                validation = { errorMessage: 'Minimum amount of 0' };
              }
              return validation;
            }
          ])
        ],
        description: [''],
        date: [format(new Date(), 'yyyy-MM-dd')],
        time: [format(new Date(), 'HH:mm')],
      });
  }
}
