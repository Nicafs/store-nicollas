import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from './services/product.service';
import { Item } from './model/item';

import * as $ from 'jquery';
import 'bootstrap';
import 'popper.js';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  item: Item;
  qtdImgList: 4;
  qtdImgTransition: 1;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { 
   
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let id = params['id'];

      if (id != null && id > 0) {
        this.productService.getProduct(id)
          .subscribe( item => { this.item = item; });
      }
    });
  }


}
