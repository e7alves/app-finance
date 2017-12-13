import { ToasterModule } from 'angular2-toaster';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { SharedModuleModule } from './../shared/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ToasterModule,
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
