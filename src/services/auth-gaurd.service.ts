import { Injectable }     from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, CanActivateChild
}    from '@angular/router';
import {UsersService} from "./users.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor( private userService: UsersService, private router: Router) {

  }

  checkLogin(url: string): boolean {
    if (this.userService.isLoggedIn()) {
      return true
    }

    this.userService.redirectUrl = url;

    this.router.navigate(['/login']);
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}
