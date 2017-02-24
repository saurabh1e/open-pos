import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { HttpService } from './http.service'
import {UsersService, IUser} from "./users.service";
import {IndexDBServiceService} from "./indexdb.service";
import {MOCK_API} from '../config/api.config'


function setAuthCookies(id: string, token: string) {
  Cookie.set('id', id, 7, MOCK_API);
  Cookie.set('authentication_token', token, 7, MOCK_API);
}

function getAuthCookies(): Auth {
  return {id: Cookie.get('id'), 'authentication_token': Cookie.get('authentication_token')};
}

function deleteCookies(): void {
  Cookie.delete('id');
Cookie.delete('authentication_token');
}


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

    this.auth = getAuthCookies();
  }

  set auth(data: Auth){
    this._auth = data;
    if (this.auth.id && this.auth.authentication_token) {
      this.setUser(this.auth.id)
    }
  }

  setUser(id: string): void {
    this._userService.get(id).subscribe((data: IUser)=> {
      this._userService.user = data;
    }, (error)=>{
      if (error.type == 'error') {
        this._indexDB.users.get(parseInt(id)).then((data)=>{
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
        let data = res.json();
        setAuthCookies(data.id, data.authentication_token);
        return data;
      });
  }

  logout(): void {
    deleteCookies();
    this.auth = <Auth>{};
    this._userService.logout();
  }
}
