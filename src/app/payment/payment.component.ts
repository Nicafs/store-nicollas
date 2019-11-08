import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Item } from '../shared/model/item';
import { ReciboDialogComponent } from './recibo/recibo-dialog.component';

import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  isLinear = false;
  years = [];
  itemList: Item[];
  totalCart = 0;
  totalEconomy = 0;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, 
              private globalService: GlobalService, 
              public dialog: MatDialog) { 
    this.years = []; 
    let yearActual = new Date().getFullYear();
    for(let i = 0; i < 32; ++i) { 
      this.years.push(yearActual + i);
    }
  }

  ngOnInit() {
    this.itemList      = this.globalService.getCart();
    this.totalCart     = this.globalService.getCartTotal();
    this.totalEconomy  = this.globalService.getCartTotalEconomy();

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

  openDialog() {
    const dialogRef = this.dialog.open(ReciboDialogComponent, {
      width: '95%',
      maxWidth: '95%',
      data: {itemList: this.itemList,
            totalCart: this.totalCart ,
            totalEconomy: this.totalEconomy,}
    });

    dialogRef.afterClosed().subscribe();
  }

}
