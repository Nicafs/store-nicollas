import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPagination, Pagination } from './pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent  {
  @Input() pagination: IPagination = new Pagination();
  @Output() pageChanged: EventEmitter<IPagination> = new EventEmitter();

  constructor() { }

  onPageChanged(event) {
    this.pagination.currentPage    = event.pageIndex;
    this.pagination.recordsPerPage = event.pageSize;
    this.pageChanged.emit();
  }

}
