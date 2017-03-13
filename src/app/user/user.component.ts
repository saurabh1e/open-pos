import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {RetailShopsService, RetailShop} from "../../services/shop.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  shops: RetailShop[];
  shop: RetailShop;

  constructor(private _router: Router, private _authService: AuthService, private _shopService: RetailShopsService) { }

  ngOnInit() {

    this.shop = this._shopService.shop;
    this.shops = this._shopService.shops;

    this._shopService.shops$.subscribe((data: RetailShop[]) => {
      this.shops = data;
    });
    this._shopService.shop$.subscribe((data: RetailShop) => {
      this.shop = data;
    });
  }

  logout(): void {
    this._authService.logout();
    this._router.navigate(['/']);
  }
  openProfile(): void {

  }

  setShop(shop?: RetailShop): void {
    console.log(shop);
    if (!shop) {
      shop = <RetailShop>{};
    }
    this._shopService.shop = shop;
    this.shop = shop;
  }
}
