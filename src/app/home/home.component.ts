import { Component, OnInit } from '@angular/core';

import { HomeService } from './services/home.service';
import { Itens } from './model/itens';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  itens: Itens[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getList()
    .subscribe( itens => { this.itens = itens; console.log(itens); });
  }

}
