import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from './services/product.service';
import { Item } from '../shared/model/item';

import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  item: Item;
  qtdImgList: 4;
  qtdImgTransition: 1;
  indexImg = 0;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private globalService: GlobalService) { 
   
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let id = params['id'];

      if (id != null && id > 0) {
        this.productService.getProduct(id)
          .subscribe( item => { this.item = item; this.globalService.setCart(item); });
      }
    });
  }

  changeImg(index) {
    this.indexImg = index;
  }


}
