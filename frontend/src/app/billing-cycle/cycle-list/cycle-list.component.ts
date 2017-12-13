import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BillingCycleService } from './../../shared/services/billing-cycle.service';

@Component({
  selector: 'app-cycle-list',
  templateUrl: './cycle-list.component.html',
  styleUrls: ['./cycle-list.component.css']
})
export class CycleListComponent implements OnInit {
  routeSubscribe: Subscription;  
  billingCycles = [];
  @Output() onClickUpdate = new EventEmitter();
  @Output() onClickDelete = new EventEmitter();
  @Output() onClickInsert = new EventEmitter();
  page: number;
  numPages: number = 7;
  pageSize: number = 5;

  constructor(
    private bcService : BillingCycleService, 
    private toasterService: ToasterService,
    private route: ActivatedRoute){ 
    }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.page = this.isParamValid(params['page']) ? parseInt(params['page']) : 1;      
      this.bcService.count()
      .then(res => {
        this.numPages = Math.ceil(res.value/this.pageSize) || 1;
        if (this.page > this.numPages) {
          this.page = this.numPages;
        }
        this.list();
      }, errors => this.handleErrors(errors));
    });
  }

  isParamValid(param) {
    return param && !isNaN(param) && param > 0;
  }

  list() {
    this.bcService.list(this.pageSize, (this.page-1)*this.pageSize)
      .then(res => {
        this.billingCycles = res;
      },
        errors => this.handleErrors(errors)
      );
  }
  handleErrors(errors) {
    errors.forEach(error => {
      this.toasterService.pop('error', 'Error', error);
    });
  }
}
