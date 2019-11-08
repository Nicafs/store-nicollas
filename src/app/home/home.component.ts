import { Component, OnInit } from '@angular/core';

import { HomeService } from './services/home.service';
import { Itens } from '../shared/model/itens';

import { IPagination, Pagination } from '../pagination/pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itens: Itens[];
  config: any;
  pagination: IPagination = new Pagination();

  constructor(private homeService: HomeService) { 
  }

  ngOnInit() {
    this.homeService.getList()
    .subscribe( itens => { this.itens = itens; this.pagination.totalRecords = itens.length; 
    });
  }

}
