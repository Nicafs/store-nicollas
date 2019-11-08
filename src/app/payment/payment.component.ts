import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  isLinear = false;
  years = [];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { 
    this.years = []; 
    let yearActual = new Date().getFullYear();
    for(let i = 0; i < 32; ++i) { 
      this.years.push(yearActual + i);
    }
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      profNameCtrl: ['', Validators.required],
      profEmailCtrl: ['', Validators.required],
      profCpfCtrl: ['', Validators.required],
      profTelCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      adressStreetCtrl: ['', Validators.required],
      adressNumberCtrl: ['', Validators.required],
      adressDistrictCtrl: ['', Validators.required],
      adressCepCtrl: ['', Validators.required],
      adressCityCtrl: ['', Validators.required],
      adressStateCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      payNumberCtrl: ['', Validators.required],
      payValMonthCtrl: ['', Validators.required],
      payValYearCtrl: ['', Validators.required],
      payNameCtrl: ['', Validators.required],
      payCodSegCtrl: ['', Validators.required]
    });
  }

}
