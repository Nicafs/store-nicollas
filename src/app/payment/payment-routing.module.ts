import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';

const PaymentRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

export const PaymentRoutingModule = RouterModule.forChild(PaymentRoutes);