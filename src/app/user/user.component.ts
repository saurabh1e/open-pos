import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
  }

  logout(): void {
    this._authService.logout();
    this._router.navigate(['/']);
  }
  openProfile(): void {

  }
}
