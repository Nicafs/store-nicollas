import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Item } from '../../shared/model/item';

@Component({
  selector: 'app-recibo-dialog',
  templateUrl: './recibo-dialog.component.html',
  styleUrls: ['./recibo-dialog.component.scss']
})
export class ReciboDialogComponent implements OnInit {

  itemList: Item[];
  totalCart = 0;
  totalEconomy = 0;

  constructor(
    public dialogRef: MatDialogRef<ReciboDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit () {
      this.itemList     = this.data.itemList;
      this.totalCart    = this.data.totalCart;
      this.totalEconomy = this.data.totalEconomy;
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
