import { Injectable } from '@angular/core';
import { RequestOptionsArgs, Headers } from '@angular/http';
import { IHttpInterceptor } from '@covalent/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Injectable()
export class RequestInterceptor implements IHttpInterceptor {

  onRequest(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    // you add headers or do something before a request here.
    if(Cookie.get('authentication_token')) {
      let headers = new Headers();
      headers.append('authorization', Cookie.get('authentication_token'));
      requestOptions.headers = headers;
    }
    return requestOptions;
  }
}
