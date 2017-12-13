import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldComponent } from './components/field/field.component';
import { SummaryComponent } from './components/summary/summary.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ValueBoxComponent } from './components/value-box/value-box.component';
import { BillingCycleService } from './services/billing-cycle.service';
import { BillingCyclesRoutingModule } from './../billing-cycle/billing-cycle-routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard.';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    BillingCyclesRoutingModule,
  ],
  exports: [
    ValueBoxComponent,
    FieldComponent,
    SummaryComponent,
    PaginationComponent,
  ],
  declarations: [
    ValueBoxComponent, 
    FieldComponent, 
    SummaryComponent,
    PaginationComponent,
  ],
  providers: [
    BillingCycleService, 
    AuthService, 
    AuthGuard
  ]
})
export class SharedModuleModule { }
