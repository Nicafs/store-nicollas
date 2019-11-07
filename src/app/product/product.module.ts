import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [ProductComponent, InfoComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
