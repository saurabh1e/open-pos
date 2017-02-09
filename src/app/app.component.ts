import {Component, AfterViewInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

import {AuthService} from "../services/auth.service";


@Component({
  selector: 'qs-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{

  constructor(
              private _iconRegistry: MdIconRegistry,
              private _domSanitizer: DomSanitizer,
              private _authService: AuthService) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'github',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'logo',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'online-shop',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/online-shop.svg'));
  }

  ngAfterViewInit(): void {

    if (this._authService.auth.id) {
      this._authService._auth$.next(this._authService.auth)
    }

  }

}
