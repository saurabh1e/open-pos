import { Injectable } from '@angular/core';
import {RequestOptionsArgs, Headers, Response} from '@angular/http';
import { IHttpInterceptor } from '@covalent/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {TdDialogService} from "@covalent/core";


@Injectable()
export class RequestInterceptor implements IHttpInterceptor {

  constructor(private _dialogService: TdDialogService){

  }

  onRequest(requestOptions: RequestOptionsArgs): RequestOptionsArgs {
    // you add headers or do something before a request here.
    if(Cookie.get('authentication_token')) {
      let headers = new Headers();
      headers.append('authorization', Cookie.get('authentication_token'));
      requestOptions.headers = headers;
    }
    return requestOptions;
  }

  onResponse (error: Response): Response {
    return error;
  };
  onResponseError (error: Response): Response {
    this.openAlert(error.json(), error.status);
    return error;
  };

  openAlert(message: {}, status: number): void {
    let title = 'Error!!';
    switch (status) {
      case 400: title = 'Bad request'; break;
      case 401: title = 'Unauthorized: you don\'t access'; break;
      case 403: title = 'Forbidden: access not allowed'; break;
      case 404: title = null; break;
    }
    if (title) {
      this._dialogService.openAlert({
        message: message['message'] || 'Unexpected error check network connection!!',
        disableClose: false,
        title: title,
        closeButton: 'Close',
      });
    }

  }
}
