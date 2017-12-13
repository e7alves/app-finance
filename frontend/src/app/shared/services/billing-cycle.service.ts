import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Consts } from './../../consts';
import { CustomHttp } from './../../customHttp';

@Injectable()
export class BillingCycleService {

  constructor(private http: CustomHttp) { /*console.log(this.http.defaultOptions)*/ }

  getSummary() {
    return this.http.get(`${Consts.api}/billingCycles/summary`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  list(limit, skip) {
    return this.http.get(`${Consts.api}/billingCycles?limit=${limit}&skip=${skip}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  insert(billingCycle) {
    return this.http.post(`${Consts.api}/billingCycles`, billingCycle)
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);  
  }

  update(billingCycle) {
    return this.http.put(`${Consts.api}/billingCycles/${billingCycle._id}`, billingCycle)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  delete(billingCycle) {
    return this.http.delete(`${Consts.api}/billingCycles/${billingCycle._id}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  count() {
    return this.http.get(`${Consts.api}/billingCycles/count`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  handleError(error: Response) {
    return Promise.reject(error.json()['errors'] || 'Server error');    
  }

}
