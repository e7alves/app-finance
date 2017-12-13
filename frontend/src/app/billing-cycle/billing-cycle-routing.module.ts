import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { BillingCycleComponent } from './billing-cycle.component';
import { CycleListComponent } from './cycle-list/cycle-list.component';
import { FormComponent } from './form/form.component';
import { AuthGuard } from './../shared/guards/auth.guard.';

const billingCyclesRoutes: Routes = [
    {path: 'billingCycle', canActivate: [AuthGuard], component: BillingCycleComponent}
];

@NgModule({
    imports: [RouterModule.forChild(billingCyclesRoutes)],
    exports: [RouterModule]
})
export class BillingCyclesRoutingModule {}