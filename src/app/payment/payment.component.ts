import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      profNameCtrl: ['', Validators.required],
      profEmailCtrl: ['', Validators.required],
      profCpfCtrl: ['', Validators.required],
      profTelCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      profNameCtrl: ['', Validators.required],
      profEmailCtrl: ['', Validators.required],
      profCpfCtrl: ['', Validators.required],
      profTelCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      profNameCtrl: ['', Validators.required],
      profEmailCtrl: ['', Validators.required],
      profCpfCtrl: ['', Validators.required],
      profTelCtrl: ['', Validators.required]
    });
  }

}
