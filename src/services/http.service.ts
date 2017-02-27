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
    return this.http.get(MOCK_API+url, {search: parameters(params)}).map(res=>res.json());
  }

  get(url: string, id: string): any {
    return this.http.get(MOCK_API+url+id+'/').map(res=>res.json())

  }

  patch(url: string, id: string, data: {}): any {
    return this.http.patch(MOCK_API+url+id+'/', data).map(res=>res.json())

  }

  update(url: string, data: {}): any {
    return this.http.put(MOCK_API+url, data).map(res=>res.json())

  }

  post(url: string, data?: {}): any {
    return this.http.post(MOCK_API+url, data).map(res=>res.json())

  }

  save(url: string, data: {}): any {
    return this.http.post(MOCK_API+url, data).map(res=>res.json())

  }
}
