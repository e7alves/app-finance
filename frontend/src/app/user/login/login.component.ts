import { Router } from '@angular/router';
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

import { Consts } from './../../consts';
import { CustomHttp } from './../../customHttp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {email: '', password: '', confirmPassword: ''};
  isSignUp = false;
  private toasterconfig : ToasterConfig = new ToasterConfig({'positionClass': 'toast-top-center'});
  
  constructor(
    private authService: AuthService,
    private toasterService: ToasterService,
    private router: Router,
    private http: CustomHttp,
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login(this.user.email, this.user.password)
      .then(res => {
        this.didLogin(res);
      }, errors => this.handleErrors(errors));
  }

  onSignUp() {
    this.authService.signUp(this.user)
      .then(res => {
        this.didLogin(res);
      }, errors => this.handleErrors(errors));
  }

  didLogin(userInfo) {
    localStorage.setItem(Consts.userName, JSON.stringify(userInfo));
    this.http.setDefaultOptions('authorization', userInfo.token);
    this.router.navigate(['/']);
  }

  toggleSignUpLogin() {
    this.isSignUp = !this.isSignUp;
    this.clear(!this.isSignUp);
  }

  handleErrors(errors) {
    errors.forEach(error => {
      this.toasterService.pop('error', 'Error', error);
    });
  }

  clear(onlyPassword: any) {
    if (onlyPassword) {
      this.user.password = '';
      this.user.confirmPassword = '';
    } else {
      this.user.email = '';
      this.user.password = '';
      this.user.confirmPassword = '';
    }
  }
}
