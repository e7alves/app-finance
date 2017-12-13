import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToasterService, ToasterModule } from 'angular2-toaster';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingCycleComponent } from './billing-cycle.component';
import { CycleListComponent } from './cycle-list/cycle-list.component';
import { BillingCyclesRoutingModule } from './billing-cycle-routing.module';
import { FormComponent } from './form/form.component';
import { SharedModuleModule } from './../shared/shared-module.module';
import { CreditListComponent } from './credit-list/credit-list.component';
import { DebtListComponent } from './debt-list/debt-list.component';
import { BillingCycleService } from './../shared/services/billing-cycle.service';

@NgModule({
  imports: [
    CommonModule,
    BillingCyclesRoutingModule,
    SharedModuleModule,
    BrowserAnimationsModule,
    ToasterModule,
    FormsModule,
  ],
  declarations: [
    BillingCycleComponent, 
    CycleListComponent, 
    FormComponent, 
    CreditListComponent, 
    DebtListComponent,
  ],
  providers: [
    ToasterService, 
    BillingCycleService, 
  ],
})
export class BillingCycleModule { }
  