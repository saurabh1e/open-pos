import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {HttpInterceptorService, RESTService} from "@covalent/http";
import {MOCK_API} from "../config/api.config";
import {RetailShopsService, RetailShop, RetailBrand} from "./shop.service";
import {IndexDBServiceService} from "./indexdb.service";
import {Auth, AuthService} from "./auth.service";
import {Response} from "@angular/http";


export interface IUser {

  id: string;
  name: string;
  email: string;
  mobile_number: string;
  roles: string[];
  retail_shop_ids: string[];
  brand_id: string;
  retail_shops: RetailShop[];
  retail_brand: RetailBrand[];
  _links: {}
  active: boolean;

}

@Injectable()
export class UsersService extends RESTService<IUser> {

  _user: IUser;
  _user$: Subject<IUser> = <Subject<IUser>> new Subject();


  constructor(private _http: HttpInterceptorService, private _shopService: RetailShopsService,
              private _indexDB: IndexDBServiceService, private _auth: AuthService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/user',
    });

    this._auth.auth$.subscribe(data=>{
      this.get(data.id).subscribe((data)=>{
        this.user = data;
      })
    })
  }

  set user(data: IUser) {
    this._user = data;
    if (this.user.id && this.user.active){
      this.getShops(this.user.retail_shop_ids);
      this.updateUserDB();
    }
    this._user$.next(this.user);
  }

  get user(): IUser {
    return this._user
  }

  updateUserDB(): void {
    this._indexDB.users.add(this.user).then(() => {
      },
      () => {
        this._indexDB.users.update(this.user.id, this.user).then()
      });
  }

  get user$(): Observable<IUser> {
    return this._user$.asObservable();
  }

  getShops(retail_shop_ids: string[]): void {
    this._shopService.query({
      __id__in: retail_shop_ids,
      __include: ['total_sales'],
      __limit: 100
    }).subscribe((data: {data: RetailShop[]}) => {
      this._shopService.shops = data.data;
    }, (error) => {
      if (error.type === 'error') {

        this._indexDB.shops.where('id').anyOf(retail_shop_ids).toArray().then((data) => {
          this._shopService.shops = data;
        })
      }
    });
  }

  login(email, password): Observable<Response> {
    return this._http.post(MOCK_API+'login/', {'email': email, 'password': password}).map(res=>res.json());
  }

  logout(): Promise<boolean> {
    this.user = <IUser>{};
    return this._auth.deleteAuthData().then(data=>{
      return data;
    });
  }
}

