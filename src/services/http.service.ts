import { Injectable } from '@angular/core';
import {URLSearchParams, Http,  RequestOptionsArgs, XHRBackend, RequestOptions} from '@angular/http';
import  'rxjs/operator/map';
import { MOCK_API } from '../config/api.config'
import {Observable} from "rxjs";


export function parameters(queryParams: {}){
  let params: URLSearchParams = new URLSearchParams();
  for (let query in queryParams){
    params.set(query, queryParams[query]);
  }
  return params
}


@Injectable()
export class HttpService extends Http{

  constructor(backend: XHRBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  query(url: string, params: {}): Observable<any> {
    return super.get(MOCK_API+url, {search: parameters(params)}).map(res=>res.json());
  }

  get(url: string,  requestOptions?: RequestOptionsArgs, id?: string,): Observable<any> {
    return super.get(MOCK_API+url+id+'/').map(res=>res.json())

  }

  patch(url: string, id: string, data: {}): Observable<any> {
    return super.patch(MOCK_API+url+id+'/', data).map(res=>res.json())

  }

  update(url: string, data: {}): Observable<any> {
    return super.put(MOCK_API+url, data).map(res=>res.json())

  }

  post(url: string, data?: {}): Observable<any> {
    return super.post(MOCK_API+url, data).map(res=>res.json())

  }

  save(url: string, data: {}): Observable<any> {
    return super.post(MOCK_API+url, data).map(res=>res.json())

  }
}
