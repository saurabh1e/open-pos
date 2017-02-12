import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import { CovalentCoreModule } from '@covalent/core';
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentChartsModule } from '@covalent/charts';
import { CovalentSearchModule, CovalentExpansionPanelModule } from '@covalent/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './dashboard/carts/carts.component';
import { ShopComponent } from './dashboard/shops/shops.component';

import { appRoutes, appRoutingProviders } from './app.routes';
import {Ng2PaginationModule} from 'ng2-pagination';


import { RequestInterceptor } from '../config/interceptors/request.interceptor';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import {HttpService} from "../services/http.service";
import {AuthService} from "../services/auth.service";
import {UsersService} from "../services/users.service";
import {RetailShopsService} from "../services/shop.service";
import {
  ItemsService, DistributorService, TagsService, TaxsService, BrandsService,
  SaltsService
} from "../services/items.service";
import {
  ProductSearchPipe, ProductBrandPipe, ProductDistributorPipe,
  ProductTagPipe, ProductSaltPipe, KeysPipe
} from '../pipes/product-search.pipe';
import {IndexDBServiceService} from "../services/indexdb.service";
import {CartService} from "../services/cart.service";
import {OrdersService} from "../services/orders.service";
import {BillingComponent} from "./billing/billing.component";
import {ProductInfoComponent} from "./billing/product-info/product-info.component";
import {CheckoutComponent} from "./billing/checkout/checkout.component";
import {ItemDiscountComponent} from "./billing/item-discount/item-discount.component";


const httpInterceptorProviders: Type<IHttpInterceptor>[] = [
  RequestInterceptor,
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    DashboardComponent,
    CartComponent,
    ShopComponent,
    ItemDiscountComponent,
    ProductInfoComponent,
    CheckoutComponent,
    BillingComponent,
    ProductSearchPipe,
    ProductBrandPipe,
    ProductDistributorPipe,
    ProductTagPipe,
    ProductSaltPipe,
    KeysPipe
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    Ng2PaginationModule,
    CovalentCoreModule.forRoot(),
    CovalentChartsModule.forRoot(),
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    CovalentHighlightModule.forRoot(),
    CovalentMarkdownModule.forRoot(),
    CovalentSearchModule.forRoot(),
    CovalentExpansionPanelModule.forRoot(),
    appRoutes,
    NgxChartsModule,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    httpInterceptorProviders,
    Title,
    HttpService,
    AuthService,
    UsersService,
    RetailShopsService,
    ItemsService,
    DistributorService, TagsService, SaltsService,
    TaxsService,
    BrandsService,
    CartService,
    OrdersService,
    IndexDBServiceService

  ], // additional providers needed for this module
  entryComponents: [ProductInfoComponent, CheckoutComponent, ItemDiscountComponent],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
