import { Injectable } from '@angular/core';
import {RequestOptionsArgs, Response, Headers} from '@angular/http';
import { IHttpInterceptor } from '@covalent/http';
import {TdDialogService} from "@covalent/core";
import {AuthService} from "../../services/auth.service";



@Injectable()
export class RequestInterceptor implements IHttpInterceptor {

  constructor(private _dialogService: TdDialogService, private _auth: AuthService){

  }

  onRequest(requestOptions: RequestOptionsArgs): RequestOptionsArgs {

    if (this._auth.auth) {
      let headers = new Headers();
      headers.append('authorization', this._auth.auth.authentication_token);
      requestOptions.headers = headers;
      return requestOptions;
    }
  }

  onResponse (error: Response): Response {
    return error;
  };
  onResponseError (error: Response): Response {
    let data;

    try {
       data = error.json()
    }
    catch (err) {
      data = {}
    }

    this.openAlert(data, error.status);
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
