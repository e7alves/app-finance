import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToasterConfig, ToasterService } from 'angular2-toaster';
import { Subscription } from 'rxjs/Subscription';

import { BillingCycleService } from './../shared/services/billing-cycle.service';

@Component({
  selector: 'app-billing-cycle',
  templateUrl: './billing-cycle.component.html',
  styleUrls: []
})
export class BillingCycleComponent  {
  billingCycle: any = {};  
  showTabs = { list: true, insert: false, update: false, delete: false };
  private toasterconfig : ToasterConfig = new ToasterConfig({'positionClass': 'toast-top-center'});

  constructor(
    private bcService: BillingCycleService, 
    private toasterService: ToasterService, 
    ) {
  }

  showUpdate(billingCycle) {
    this.setShowTabs({list: false, update: true});
    this.billingCycle = billingCycle;
  }

  showDelete(billingCycle) {
    this.setShowTabs({list: false, remove: true});
    this.billingCycle = billingCycle;
  }

  showInsert() {
    this.setShowTabs({list: false, insert: true});
    this.billingCycle = {credits: [{}], debts: [{}]};
  }

  restoreInitialView() {
    this.setShowTabs({list: true, insert: false, update: false, remove: false});
  }


  insertBillingCycle() {
    this.bcService.insert(this.billingCycle)
      .then(
        res => this.handleSuccess('Insert successful'),
        errors => this.handleErrors(errors)
      );
  }

  updateBillingCycle() {
    this.bcService.update(this.billingCycle)
      .then(
        res => this.handleSuccess('Update successful'),
        errors => this.handleErrors(errors)
      );
  }

  deleteBillingCycle() {
    this.bcService.delete(this.billingCycle)
      .then(
        res => this.handleSuccess('Delete successful'),
        errors => this.handleErrors(errors)
      );
  }

  getBillingCycleEmpty() {
    this.billingCycle = {credits: [{}], debts:[{}]};
    return this.billingCycle;
  }

  handleSuccess(msg) {
    this.toasterService.pop('success', 'Success', msg);
    this.restoreInitialView();
  }

  handleErrors(errors) {
    errors.forEach(error => {
      this.toasterService.pop('error', 'Error', error);
    });
  }

  setShowTabs ({
      list = this.showTabs.list, 
      insert = this.showTabs.insert, 
      update = this.showTabs.update, 
      remove = this.showTabs.delete}) {
    this.showTabs = { list, insert, update, delete: remove };
  }
}
