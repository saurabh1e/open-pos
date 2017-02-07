import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HttpInterceptorService, RESTService } from '@covalent/http';
import { MOCK_API } from '../config/api.config';
import {RetailShopsService, RetailShop} from "./shop.service";


export interface IUser {
  name: string;
  id: string;
  email: string;
  roles: string[];
  retail_shops: number[];
  _links: {}
  active: boolean;

}

@Injectable()
export class UsersService extends RESTService<IUser> {

  _user: IUser;
  _user$: Subject<IUser> = <Subject<IUser>> new Subject();


  constructor(private _http: HttpInterceptorService, private _shopService: RetailShopsService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/user',
    });

  }
  set user(data: IUser) {
    this._user = data;
    this._shopService.query({__user_id__: data.id}).subscribe((data: {data:RetailShop[]}) => {
      this._shopService.shops = data.data;
      this._shopService._shops$.next(this._shopService.shops);
    }, (error) => {
      console.log(error);
    });
    this._user$.next(this.user);

  }
  get user(): IUser{
    return this._user
  }

  get user$(): Observable<IUser> {
    return this._user$.asObservable();
  }

  staticQuery(): Observable<IUser[]> {
    return this._http.get('')
    .map((res: Response) => {
      return res.json();
    });
  }
}

