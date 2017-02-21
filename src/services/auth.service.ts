import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { HttpService } from './http.service'
import {UsersService, IUser} from "./users.service";
import {IndexDBServiceService} from "./indexdb.service";



export interface Auth {
  id: string;
  authentication_token: string;
}

@Injectable()
export class AuthService {
  _auth: Auth = <Auth>{};
  _auth$: Subject<Auth> = <Subject<Auth>> new Subject();

  constructor(private _http: HttpService, private _userService: UsersService,
              private _indexDB: IndexDBServiceService) {
    if (Cookie.get('authentication_token') && Cookie.get('id')) {
      this.auth = {id: Cookie.get('id'), authentication_token: Cookie.get('authentication_token')};
    }

  }

  set auth(data: Auth){
    this._auth = data;
    Cookie.set('authentication_token', data.authentication_token);
    Cookie.set('id', data.id);
    this._userService.get(data.id).subscribe((data: IUser)=> {
      this._userService.user = data;
    }, (error)=>{
      if (error.type == 'error') {
        this._indexDB.users.get(parseInt(data.id)).then((data)=>{
          this._userService.user = data;
        })
      }
    });

  }

  get auth(): Auth{
    return this._auth;
  }

  get auth$(): Observable<Auth> {
    return this._auth$.asObservable();
  }

  login(email, password): Observable<Auth> {
    return this._http.post('login/', {'email': email, 'password': password})
      .map((res: Response) => {
        return res.json();
      });
  }

}
