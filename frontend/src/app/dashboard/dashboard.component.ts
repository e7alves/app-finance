import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { BillingCycleService } from './../shared/services/billing-cycle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  private toasterconfig : ToasterConfig = new ToasterConfig({'positionClass': 'toast-top-center'});

  constructor(private bcService : BillingCycleService, private toasterService: ToasterService) {
  }

  values = {};

  ngOnInit() {
    this.bcService.getSummary()
      .then(
        res => this.values = res,
        errors => this.handleErrors(errors)
      );
  }

  handleErrors(errors) {
    errors.forEach(error => {
      this.toasterService.pop('error', 'Error', error);
    });
  }
}
