import { Injectable } from '@angular/core';

import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  total: number = 0;
  totalEconomy: number = 0;
  itemList: Item[] = [];

  constructor() { }

  setCart(item): void {
    let price = Number(item.price);
    let market_price = Number(item.market_price);
    
    this.total = this.total + price;
    this.totalEconomy += market_price - price;

    let index = this.itemList.findIndex(i => i.id === item.id);

    if ( index != null && index >= 0 ) {
      this.itemList[index].qtd += 1;
    } else {
      item.qtd = 1;
      this.itemList.push(item);
    }  
  }

  getCart(): Item[] {
    return this.itemList;
  }

  getCartTotal(): number {
    return this.total;
  }

  getCartTotalEconomy(): number {
    return this.totalEconomy;
  }

  clearCart(): void {
    this.total = 0;
    this.totalEconomy = 0;
    this.itemList = [];
  }
}
