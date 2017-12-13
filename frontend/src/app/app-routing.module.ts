import { LoginComponent } from './user/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingCycleComponent } from './billing-cycle/billing-cycle.component';
import { AuthGuard } from './shared/guards/auth.guard.';

const appRoutes: Routes = [
    { path: '', canActivate: [AuthGuard], component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: "**", component: NotFoundComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}