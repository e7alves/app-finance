import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  needPagination = true;
  @Input('num') numPages: number;
  @Input('page') currentPage: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getArrayPages() {
    let array = [];
    for(let i = 0; i < this.numPages; i++) {
      array.push(i+1);
    }
    return array;
  }

  isCurrent(page) {
    return page == this.currentPage;
  }

  hasPrev(): boolean {
    return this.currentPage > 1;
  }

  hasNext(): boolean {
    return this.currentPage < this.numPages;
  }

  getPrev() {
    return this.currentPage-1;
  }

  getNext() {
    return this.currentPage+1;
  }

  onNavigate(page) {
    console.log(page)
    this.router.navigateByUrl(`billingCycle?page=${page}`);
  }
}
