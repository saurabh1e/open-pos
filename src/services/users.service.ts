import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HttpInterceptorService, RESTService } from '@covalent/http';
import { MOCK_API } from '../config/api.config';
import {RetailShopsService, RetailShop} from "./shop.service";
import {IndexDBServiceService} from "./indexdb.service";


export interface IUser {

  id: number;
  name: string;
  email: string;
  mobile_number: string;
  roles: string[];
  retail_shop_ids: number[];
  brand_ids: number[];
  retail_shops: RetailShop[];
  _links: {}
  active: boolean;

}

@Injectable()
export class UsersService extends RESTService<IUser> {

  _user: IUser;
  _user$: Subject<IUser> = <Subject<IUser>> new Subject();


  constructor(private _http: HttpInterceptorService, private _shopService: RetailShopsService,
              private _indexDB: IndexDBServiceService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/user',
    });

  }
  set user(data: IUser) {
    this._user = data;
    this._shopService.query({__id__in: data.retail_shop_ids, __include: ['total_sales'], __limit:100}).subscribe((data: {data:RetailShop[]}) => {
      this._shopService.shops = data.data;
    }, (error) => {
      if (error.type === 'error') {

        this._indexDB.shops.where('id').anyOf(data.retail_shop_ids).toArray().then((data)=>{
          this._shopService.shops = data;
        })
      }
    });

    this._indexDB.users.add(this.user).then(()=>{},
      ()=>{
        this._indexDB.users.update(this.user.id, this.user).then()
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

