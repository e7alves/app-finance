import { CustomHttp } from './../../customHttp';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './../services/auth.service';
import { Consts } from './../../consts';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService, 
    private router: Router,
    private http: CustomHttp,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
      :boolean | Observable<boolean> | Promise<boolean> {
    const userInfo = JSON.parse(localStorage.getItem(Consts.userName));
    if (!userInfo) {
      this.requireLogin();
      return false;
    }
    return this.authService.validateToken(userInfo.token)
      .then(res => {
        if (res.valid) {
          this.authService.setLogged(true);
          return true;
        }
        this.requireLogin();
        return false;
      });
  }

  requireLogin() {
    this.authService.setLogged(false);
    this.router.navigate(['/login']);
}

  handleErrors(errors) {
    this.requireLogin();
  }
}
