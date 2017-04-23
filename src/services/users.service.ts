import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {HttpInterceptorService, RESTService} from "@covalent/http";
import {MOCK_API} from "../config/api.config";
import {RetailShopsService, RetailShop, RetailBrand} from "./shop.service";
import {Config, IndexDBServiceService} from "./indexdb.service";
import {Auth, AuthService} from "./auth.service";
import {Response} from "@angular/http";


export interface IUser {

  id: string;
  name: string;
  email: string;
  mobile_number: string;
  roles: Role[];
  retail_shop_ids: string[];
  brand_id: string;
  retail_shops: RetailShop[];
  retail_brand: RetailBrand[];
  permissions: Permission[];
  _links: {}
  active: boolean;

}

export interface Role {
  id: string;
  name: string;
  permissions: Permission[];
}

export interface Permission {
  id: string;
  name: string;
}


@Injectable()
export class UsersService extends RESTService<IUser> {

  _user: IUser = null;
  _user$: Subject<IUser> = <Subject<IUser>> new Subject();
  public redirectUrl: string = null;


  constructor(private _http: HttpInterceptorService, private _authService: AuthService,
              private _indexDB: IndexDBServiceService, private _shopService: RetailShopsService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/user',
    });

    this._authService.auth$.subscribe((data)=>{
      if (data.id && data.authentication_token) {
        this.get(data.id).subscribe((data)=>{
          this.user = data;
        }, (err: ProgressEvent)=>{
          if (err.type === 'error') {
            this._indexDB.users.get(data.id).then((user)=>{
              this.user = user;
            })
          }
        })
      }
    })

  }

  set user(data: IUser) {
    this._user = data;
    if (this.user.id && this.user.active){
      this.updateUserDB();
    }

      this._shopService.query({
        __id__in: this.user.retail_shop_ids,
        __include: ['total_sales', 'printer_config', 'registration_details'],
        __limit: 100
      }).subscribe((data: {data: RetailShop[]}) => {
        this._shopService.shops = data.data;
      }, (error) => {
        if (error.type === 'error') {

          this._indexDB.shops.where('id').anyOf(this.user.retail_shop_ids).toArray().then((data) => {
            this._shopService.shops = data;
            this._indexDB.configs.toArray().then((config: Config[])=>{
              config.forEach((value)=>{
                if (value.is_selected) {
                  this._shopService.shop = data.find((shop)=>{
                    return shop.id === value.shop_id;
                  })
                }
              })
            });

          })
        }
      });
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


  login(email, password): Observable<Response> {
    return this._http.post(MOCK_API+'login/', {'email': email, 'password': password}).map(res=>res.json());
  }

  async logout(): Promise<boolean> {
    this.user = <IUser>{};
    return this._authService.deleteAuthData();
  }

  isLoggedIn(): boolean {
    return this.user && this.user.active
  }

  updateShopAccess(userId: string, shopId: string, action: string): Observable<Response> {
    return this._http.post(MOCK_API+'user_retail_shop', {__action: action, retail_shop_id: shopId, user_id: userId})
      .map(data=>data.json())
  }


}

@Injectable()
export class RolesService extends RESTService<Role> {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/role',
    });
  }


  updateRoleAccess(userId: string, roleId: string, action: string): Observable<Response> {
    return this._http.post(MOCK_API+'user_role', {__action: action, user_id: userId, role_id: roleId})
      .map(data=>data.json())
  }


  updatePermissionAccess(data: {user_id: string, permission_id: string, __action: string}[]): Observable<Response> {
    return this._http.post(MOCK_API+'user_permission', data)
      .map(data=>data.json())
  }
}



