import { Routes, RouterModule } from '@angular/router';

import { PaymentComponent } from '../payment/payment.component';

const ProductRoutes: Routes = [
  { path: 'payment', component: PaymentComponent }
];

export const ProductRoutingModule = RouterModule.forChild(ProductRoutes);