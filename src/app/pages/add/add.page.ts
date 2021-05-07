import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { format } from 'date-fns';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public addForm = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
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

    console.log(this.addForm);
  }

  public onClickAdd() {
    console.log(this.addForm);
  }
}
