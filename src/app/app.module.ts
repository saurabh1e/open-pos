import {NgModule, Type} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import {CovalentCoreModule, CovalentDataTableModule, CovalentDialogsModule, CovalentSearchModule} from "@covalent/core";
import {CovalentHttpModule, IHttpInterceptor} from "@covalent/http";
import {TagInputModule} from "ng2-tag-input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from 'ng2-ckeditor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CovalentPagingModule } from '@covalent/core';

import {AppComponent} from "./app.component";
import {appRoutes, appRoutingProviders} from "./app.routes";
import {RequestInterceptor} from "../config/interceptors/request.interceptor";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {AuthService} from "../services/auth.service";
import {UsersService} from "../services/users.service";
import {RetailShopsService} from "../services/shop.service";

import {
  BrandsService, DistributorBillsService,
  DistributorService,
  ItemsService, ProductSaltService, ProductTagService,
  SaltsService,
  StocksService,
  TagsService,
  TaxsService
} from "../services/items.service";
import {
  KeysPipe,
  ProductBrandPipe,
  ProductDistributorPipe,
  ProductSaltPipe,
  ProductSearchPipe,
  ProductTagPipe,
  SafeHtml,
  SearchPipe, TruncatePipe
} from "../pipes/product-search.pipe";
import {IndexDBServiceService} from "../services/indexdb.service";
import {CartService} from "../services/cart.service";
import {OrderItemsService, OrdersService} from "../services/orders.service";
import {ProductInfoComponent} from "./billing/product-info/product-info.component";
import {ItemDiscountComponent} from "./billing/item-discount/item-discount.component";
import {BackButtonComponent} from "./back-button/back-button.component";
import {GoBackDirective} from "../directives/go-back.directive";
import {BillingComponent} from "./billing/billing.component";
import {CheckoutComponent} from "./billing/checkout/checkout.component";
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "../services/auth-gaurd.service";
import {MainRouteComponent} from "./main-route/main-route.component";
import {StockComponent} from "./stock-management/stock/stock.component";
import {StockManagementComponent} from "./stock-management/stock-management.component";
import {AddStockComponent} from "./stock-management/add-stock/add-stock.component";
import {DistributorBillComponent} from "./stock-management/distributor-bill/distributor-bill.component";
import {ExpiryComponent} from "./stock-management/expiry/expiry.component";
import {ShortageComponent} from "./stock-management/shortage/shortage.component";
import {BaseStockTableComponent} from "./stock-management/base-stock-table/base-stock-table.component";
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {TableRowComponent} from "./inventory/table-row/table-row.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ShopComponent} from "./dashboard/shops/shops.component";
import {CartComponent} from "./dashboard/carts/carts.component";
import {PrinterConfigComponent} from "./dashboard/printer-config/printer-config.component";
import {DetailComponent} from "./dashboard/detail/detail.component";
import {InventoryComponent} from "./inventory/inventory.component";
import {ProductComponent} from "./inventory/product/product.component";
import {SaltComponent} from "./inventory/salt/salt.component";
import {BrandComponent} from "./inventory/brand/brand.component";
import {DistributorComponent} from "./inventory/distributor/distributor.component";
import {TaxComponent} from "./inventory/tax/tax.component";
import {TagComponent} from "./inventory/tag/tag.component";
import {TagFormComponent} from "./inventory/tag/tag-form/tag-form.component";
import {TaxFormComponent} from "./inventory/tax/tax-form/tax-form.component";
import {DistributorFormComponent} from "./inventory/distributor/distributor-form/distributor-form.component";
import {ProductFormComponent} from "./inventory/product/product-form/product-form.component";
import {SaltFormComponent} from "./inventory/salt/salt-form/salt-form.component";
import {BrandFormComponent} from "./inventory/brand/brand-form/brand-form.component";
import {MenuComponent} from "./inventory/menu/menu.component";
import {BaseTableComponent} from "./inventory/base-table/base-table.component";
import {StaffComponent} from "./staff/staff.component";
import {StaffDetailComponent} from "./staff/staff-detail/staff-detail.component";
import {ReportingComponent} from "./reporting/reporting.component";
import {SaleComponent} from "./reporting/sale/sale.component";
import {OrderComponent} from "./reporting/order/order.component";
import {OrderDetailComponent} from "./reporting/order/order-detail/order-detail.component";
import {CustomerComponent} from "./reporting/customer/customer.component";
import {CustomerDetailComponent} from "./reporting/customer/customer-detail/customer-detail.component";
import {CustomerReportComponent} from "./reporting/customer-report/customer-report.component";
import {StockReportComponent} from "./reporting/stock-report/stock-report.component";


const httpInterceptorProviders: Type<IHttpInterceptor>[] = [
  RequestInterceptor,
];

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    LoginComponent,
    CheckoutComponent,
    UserComponent,
    BackButtonComponent,
    MainRouteComponent,
    StockComponent,
    StockManagementComponent,
    AddStockComponent,
    DistributorBillComponent,
    ExpiryComponent,
    ShortageComponent,
    BaseStockTableComponent,
    SideMenuComponent,
    TableRowComponent,
    DashboardComponent,
    ShopComponent,
    CartComponent,
    PrinterConfigComponent,
    DetailComponent,
    ItemDiscountComponent,
    ProductInfoComponent,
    ProductSearchPipe,
    ProductBrandPipe,
    ProductDistributorPipe,
    InventoryComponent,
    ProductComponent,
    SaltComponent,
    BrandComponent,
    DistributorComponent,
    TaxComponent,
    TagComponent,
    TagFormComponent,
    TaxFormComponent,
    DistributorFormComponent,
    ProductFormComponent,
    SaltFormComponent,
    BrandFormComponent,
    MenuComponent,
    BaseTableComponent,
    StaffComponent,
    StaffDetailComponent,
    ReportingComponent,
    SaleComponent,
    StockReportComponent,
    OrderComponent,
    OrderDetailComponent,
    CustomerComponent,
    CustomerDetailComponent,
    CustomerReportComponent,
    ProductTagPipe,
    SearchPipe,
    ProductSaltPipe,
    KeysPipe,
    SafeHtml,
    GoBackDirective,
    TruncatePipe,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CKEditorModule,
    CovalentCoreModule,
    FlexLayoutModule,
    CovalentDataTableModule,
    CovalentPagingModule,
    CovalentDialogsModule,
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    FormsModule,
    ReactiveFormsModule,
    CovalentSearchModule,
    TagInputModule,
    appRoutes,
    NgxChartsModule,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    RetailShopsService,
    UsersService,
    AuthService,
    RequestInterceptor,
    AuthGuard,
    ItemsService,
    OrderItemsService,
    DistributorService,
    TagsService,
    SaltsService,
    TaxsService,
    BrandsService,
    StocksService,
    CartService,
    OrdersService,
    DistributorBillsService,
    ProductSaltService,
    ProductTagService,
    IndexDBServiceService,

  ], // additional providers needed for this module
  entryComponents: [ProductInfoComponent, CheckoutComponent, ItemDiscountComponent,
    ProductFormComponent, BrandFormComponent, TagFormComponent, TaxFormComponent, SaltFormComponent,
    DistributorFormComponent, CustomerDetailComponent, OrderDetailComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
