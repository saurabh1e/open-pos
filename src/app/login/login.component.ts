import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {TdLoadingService, LoadingType, LoadingMode} from '@covalent/core';
import {UsersService, AuthService, Auth } from '../../services'
import {IUser} from "../../services/users.service";


@Component({
  selector: 'qs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  username: string;
  password: string;
  user: IUser;

  constructor(private _router: Router,
              private _loadingService: TdLoadingService,
              private _userService: UsersService,
              private _authService: AuthService) {
    this._loadingService.create({
      name: 'login',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });
  }

  login(): void {
    this._loadingService.register('login');
    this._authService.login(this.username, this.password).subscribe((data) => {
      this._authService.auth = data;
      this._authService.setAuthCookies();
      this._router.navigate(['dashboard/shops']);
      this._loadingService.resolve('login');
    },(error) => {
      console.log(error);
      this._loadingService.resolve('login');
    });
  }

  ngOnInit(): void {
    this._loadingService.register('login');
    this.user = this._userService.user;
    this._userService.user$.subscribe((data:IUser)=> {
      this.user = data;
      this.checkUser();
    });
    this.checkUser();
  }


  checkUser(): void {
    if (this.user && this.user.active) {
      this._router.navigate(['dashboard/shops']);
    }
    this._loadingService.resolve('login');
  }
}
