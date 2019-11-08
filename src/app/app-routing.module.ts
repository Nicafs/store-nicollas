import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { PaymentComponent } from './payment/payment.component';

const AppRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, {useHash: true});