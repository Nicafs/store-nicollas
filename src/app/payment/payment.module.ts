import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


import { PaymentRoutingModule } from './payment-routing.module';

import { PaymentComponent } from './payment.component';
import { ReciboDialogComponent } from './recibo/recibo-dialog.component';

//ANGULAR MATERIAL
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [PaymentComponent, ReciboDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatStepperModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatDialogModule,
    PaymentRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  entryComponents: [ReciboDialogComponent],
})
export class PaymentModule { }
