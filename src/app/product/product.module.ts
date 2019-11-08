import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { ProductComponent } from './product.component';

import { CarouselDirective } from '../carousel.directive';
@NgModule({
  declarations: [ProductComponent, CarouselDirective],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})

export class ProductModule { }
