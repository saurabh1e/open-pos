import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {TdLoadingService, LoadingType, LoadingMode} from '@covalent/core';
import {UsersService, AuthService } from '../../services'
import {IUser} from "../../services/users.service";

@Component({
  selector: 'qs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit{

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

  ngAfterViewInit() {

    this._loadingService.register('login');
    this.checkLogIn();
    this._userService.user$.subscribe(()=> {
      this.checkLogIn();
    });
  }

  ngOnInit(): void {

  }

  login(): void {
    this._loadingService.register('login');
    this._userService.login(this.username, this.password).subscribe((data: any) => {
      this._authService.setAuthData(data.id, data.authentication_token).then(()=>{
        this._authService.auth = data;
        this._userService.get(data.id).subscribe((data)=>{
          this._userService.user = data;
          this.checkLogIn();
          this._loadingService.resolve('login');
        });

      });

    },() => {
      this._loadingService.resolve('login');
    });
  }

  redirect(): void {
    if (this._userService.redirectUrl) {
      this._router.navigate([this._userService.redirectUrl]).then();
    }
    else {
      this._router.navigate(['dashboard/shops']).then();
    }
  }

  checkLogIn(): void {
    if (this._userService.isLoggedIn()) {
      this.redirect();
    }
    this._loadingService.resolve('login');
  }
}
