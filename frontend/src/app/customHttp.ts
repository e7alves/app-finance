import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Headers, RequestOptions, Response, RequestOptionsArgs} from '@angular/http';

import { Consts } from './consts';

@Injectable()
export class CustomHttp extends Http {

  private defaultOptions: RequestOptions;

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
    this.defaultOptions = defaultOptions;
  }

  public setDefaultOptions(name, value) {
    this.defaultOptions.headers.set(name, value);    
  }
}