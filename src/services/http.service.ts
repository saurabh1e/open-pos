// import {Injectable, Injector} from '@angular/core';
// import {TdDialogService} from "@covalent/core";
// import {URLSearchParams, Http, RequestOptionsArgs, XHRBackend, RequestOptions, Headers, Response} from '@angular/http';
// import  'rxjs/operator/map';
// import { MOCK_API } from '../config/api.config'
// import {Observable} from "rxjs";
// import {AuthService} from "./auth.service";
// import {HttpInterceptorService, IHttpInterceptorConfig} from "@covalent/http";
// import {IHttpInterceptorMatcher} from "@covalent/http/interceptors/http-interceptor-matcher.interface";
//
//
//
// export function parameters(queryParams: {}){
//   let params: URLSearchParams = new URLSearchParams();
//   for (let query in queryParams){
//     params.set(query, queryParams[query]);
//   }
//   return params
// }
//
//
// @Injectable()
// export class HttpService extends HttpInterceptorService{
//
//   constructor(private _auth: AuthService,
//               public _dialogService: TdDialogService,
//               private  _http: Http,
//               private  _injector: Injector,
//               private  _httpInterceptorMatcher: IHttpInterceptorMatcher,
//               private  requestInterceptorConfigs: IHttpInterceptorConfig[],
//               backend: XHRBackend, onRequest: RequestOptions {
//   }
//
//   private requestOptions(): RequestOptionsArgs {
//     let requestOptions = new RequestOptions();
//     if (this._auth.auth)  {
//       let headers = new Headers();
//       headers.append('authorization', this._auth.auth.authentication_token);
//       requestOptions.headers = headers;
//     }
//     return requestOptions;
//   }
//
//   query(url: string, params: {}): Observable<any> {
//     return super.get(MOCK_API+url, {search: parameters(params)}).map((res)=>{res.json()})
//       .catch(this.onResponseError);
//   }
//
//   get(url: string,  requestOptions?: RequestOptionsArgs, id?: string,): Observable<any> {
//     return super.get(MOCK_API+url+id+'/', this.requestOptions()).map((res)=>{res.json()})
//       .catch(this.onResponseError)
//
//   }
//
//   patch(url: string, id: string, data: {}): Observable<any> {
//     return super.patch(MOCK_API+url+id+'/', data, this.requestOptions()).map((res)=>{res.json()})
//       .catch(this.onResponseError)
//
//   }
//
//   update(url: string, data: {}): Observable<any> {
//     return super.put(MOCK_API+url, data, this.requestOptions()).map((res)=>{res.json()})
//       .catch(this.onResponseError)
//
//   }
//
//   post(url: string, data?: {}): Observable<any> {
//     return super.post(MOCK_API+url, data, this.requestOptions()).map((res)=>{res.json()})
//       .catch(this.onResponseError)
//
//   }
//
//   save(url: string, data: {}): Observable<any> {
//     return super.post(MOCK_API+url, data, this.requestOptions()).map((res)=>{res.json()})
//       .catch(this.onResponseError)
//
//   }
//
//
//   onResponseError (error: Response): Observable<any> {
//     console.log(error);
//     let data;
//     try {
//       data = error.json();
//       console.log(data)
//     }
//     catch (err) {
//       data = {}
//     }
//
//     let title = 'Error!!';
//     switch (error.status) {
//       case 400: title = 'Bad request'; break;
//       case 401: title = 'Unauthorized: you don\'t access'; break;
//       case 403: title = 'Forbidden: access not allowed'; break;
//       case 404: title = null; break;
//     }
//     if (title) {
//       this._dialogService.openAlert({
//         message: data['message'] || 'Unexpected error check network connection!!',
//         disableClose: false,
//         title: title,
//         closeButton: 'Close',
//       });
//     }
//     return Observable.throw(error.status)
//   };
//
// }
