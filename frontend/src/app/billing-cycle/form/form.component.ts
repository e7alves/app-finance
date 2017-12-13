import { Subscription } from 'rxjs/Rx';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import { ActivatedRoute, Router } from '@angular/router';

import { BillingCycleService } from './../../shared/services/billing-cycle.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input('billingCycle') billingCycle: any = {};
  @Input() textButton: string = 'Button';
  @Input() classButton: string = '';
  @Input() disabled: boolean = false;
  @Output('confirm') confirmEvent = new EventEmitter();
  @Output('cancel') cancelEvent = new EventEmitter();

  constructor() { 
  }  

  getTotalCredits(): number {
    let total = 0;
    if (this.billingCycle.credits) {
      this.billingCycle.credits.forEach(credit => {
        total += (credit.value) ? credit.value : 0;
      });
    }
    return total;
  }

  getTotalDebts(): number {
    let total = 0;
    if (this.billingCycle.debts) {
      this.billingCycle.debts.forEach(debt => {
        total += (debt.value) ? debt.value : 0;
      });
    }
    return total;
  }
}
