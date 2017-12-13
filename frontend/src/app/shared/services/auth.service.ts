import { CustomHttp } from './../../customHttp';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable, EventEmitter, OnDestroy } from '@angular/core';

import { Consts } from './../../consts';

@Injectable()
export class AuthService {

  private logged = false;

  constructor(
    private router: Router,
    private http: CustomHttp,
  ) { }

  user: any = {};
  isLoggedEmitter = new EventEmitter();

  signUp(user) {
    return this.http.post(`${Consts.openApi}/signup`, user)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  login(email, password) {
    return this.http.post(`${Consts.openApi}/login`, {email, password})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);  
  }

  logout() {
    localStorage.removeItem(Consts.userName);
    this.http.setDefaultOptions('authorization', '');
    this.setLogged(false);
    this.router.navigate(['/login']);
  }

  validateToken(token) {
    const body = {token};
    return this.http.post(`${Consts.openApi}/validateToken`, body)
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);
  }

  isLogged() {
    return this.logged;
  }

  setLogged(value) {
    this.logged = value;
    this.isLoggedEmitter.emit(value);
  }

  handleError(error: Response) {
    return Promise.reject(error.json()['errors'] || 'Server error');
  }
}
