import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [PaymentComponent, CheckoutComponent],
  imports: [
    CommonModule
  ]
})
export class PaymentModule { }
