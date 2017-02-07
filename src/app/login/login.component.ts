import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TdLoadingService } from '@covalent/core';

import {UsersService, AuthService, Auth } from '../../services'

@Component({
  selector: 'qs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  viewProviders: [UsersService, AuthService]
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private _router: Router,
              private _loadingService: TdLoadingService,
              private _userService: UsersService,
              private _authService: AuthService) {}

  login(): void {
    this._loadingService.register('main');
    this._authService.login(this.username, this.password).subscribe((data: Auth) => {
      this._authService.auth = data;
      this._router.navigate(['home/dashboard']);
      this._loadingService.resolve('main');
    },(error) => {
      console.log(error);
      this._loadingService.resolve('main');
    });

  }
}
