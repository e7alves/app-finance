import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { ToasterModule } from 'angular2-toaster';
import { SharedModuleModule } from './shared/shared-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BillingCycleModule } from './billing-cycle/billing-cycle.module';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { LoginInputComponent } from './user/login/login-input/login-input.component';
import { CustomHttp } from './customHttp';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,
    NotFoundComponent,
    UserComponent,
    LoginComponent,
    LoginInputComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    BillingCycleModule,
    SharedModuleModule,
    AppRoutingModule,
    FormsModule,
    ToasterModule,
  ],
  providers: [{
    provide: CustomHttp,
    useFactory: (backend: XHRBackend, options: RequestOptions) => {
      return new CustomHttp(backend, options);
    },
    deps: [XHRBackend, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
