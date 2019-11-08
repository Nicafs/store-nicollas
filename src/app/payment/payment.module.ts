import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';

//ANGULAR MATERIAL
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatStepperModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class PaymentModule { }
