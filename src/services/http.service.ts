/**
 * Created by saurabh on 27/1/17.
 */
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import  'rxjs/operator/map';
import { HttpInterceptorService } from '@covalent/http';

import { MOCK_API } from '../config/api.config'



export function parameters(queryParams: {}){
  let params: URLSearchParams = new URLSearchParams();
  for (let query in queryParams){
    params.set(query, queryParams[query]);
  }
  return params
}


@Injectable()
export class HttpService {

  constructor(private http: HttpInterceptorService) {
  }

  query(url: string, params: {}): any {
    return this.http.get(MOCK_API+url, {search: parameters(params)});
  }

  get(url: string, id: string): any {
    return this.http.get(MOCK_API+url+id+'/')

  }

  update(url: string, id: string, data: {}): any {
    return this.http.put(MOCK_API+url+id+'/', data)

  }

  post(url: string, data?: {}): any {
    return this.http.post(MOCK_API+url, data)

  }

  save(url: string, data: {}): any {
    return this.http.post(MOCK_API+url, data)

  }
}
