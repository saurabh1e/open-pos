import {NgModule, Type} from "@angular/core";
import {BrowserModule, Title} from "@angular/platform-browser";
import {CovalentCoreModule, CovalentDataTableModule, CovalentSearchModule} from "@covalent/core";
import {CovalentHttpModule, IHttpInterceptor} from "@covalent/http";
import {TagInputModule} from "ng2-tag-input";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CartComponent} from "./dashboard/carts/carts.component";
import {ShopComponent} from "./dashboard/shops/shops.component";
import {appRoutes, appRoutingProviders} from "./app.routes";
import {Ng2PaginationModule} from "ng2-pagination";
import {RequestInterceptor} from "../config/interceptors/request.interceptor";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {HttpService} from "../services/http.service";
import {AuthService} from "../services/auth.service";
import {UsersService} from "../services/users.service";
import {RetailShopsService} from "../services/shop.service";
import {
  ItemsService,
  DistributorService,
  TagsService,
  TaxsService,
  BrandsService,
  SaltsService
} from "../services/items.service";
import {
  ProductSearchPipe,
  ProductBrandPipe,
  ProductDistributorPipe,
  ProductTagPipe,
  ProductSaltPipe,
  KeysPipe, TruncatePipe, SearchPipe
} from "../pipes/product-search.pipe";
import {IndexDBServiceService} from "../services/indexdb.service";
import {CartService} from "../services/cart.service";
import {OrdersService} from "../services/orders.service";
import {BillingComponent} from "./billing/billing.component";
import {ProductInfoComponent} from "./billing/product-info/product-info.component";
import {CheckoutComponent} from "./billing/checkout/checkout.component";
import {ItemDiscountComponent} from "./billing/item-discount/item-discount.component";
import {ProductComponent} from "./inventory/product/product.component";
import {BrandComponent} from "./inventory/brand/brand.component";
import {TagComponent} from "./inventory/tag/tag.component";
import {SaltComponent} from "./inventory/salt/salt.component";
import {TaxComponent} from "./inventory/tax/tax.component";
import {DistributorComponent} from "./inventory/distributor/distributor.component";
import {InventoryComponent} from "./inventory/inventory.component";
import {TableRowComponent} from "./inventory/table-row/table-row.component";
import {BackButtonComponent} from "./back-button/back-button.component";
import {GoBackDirective} from "../directives/go-back.directive";
import {MenuComponent} from "./inventory/menu/menu.component";
import {ProductFormComponent} from "./inventory/product/product-form/product-form.component";
import {BrandFormComponent} from "./inventory/brand/brand-form/brand-form.component";
import {BaseTableComponent} from "./inventory/base-table/base-table.component";
import {TaxFormComponent} from "./inventory/tax/tax-form/tax-form.component";
import {TagFormComponent} from "./inventory/tag/tag-form/tag-form.component";
import {SaltFormComponent} from "./inventory/salt/salt-form/salt-form.component";
import {DistributorFormComponent} from "./inventory/distributor/distributor-form/distributor-form.component";
import {ReportingComponent} from "./reporting/reporting.component";
import {SaleComponent} from "./reporting/sale/sale.component";
import {OrderComponent} from "./reporting/order/order.component";
import {CustomerComponent} from "./reporting/customer/customer.component";
import {UserComponent} from "./user/user.component";
import {MdSelectModule} from "@angular/material";
import {StockManagementComponent} from "./stock-management/stock-management.component";
import {ExpiryComponent} from "./stock-management/expiry/expiry.component";
import {ShortageComponent} from "./stock-management/shortage/shortage.component";
import {AddStockComponent} from "./stock-management/add-stock/add-stock.component";
import {StockComponent} from "./stock-management/stock/stock.component";
import {BaseStockTableComponent} from "./stock-management/base-stock-table/base-stock-table.component";
import {DistributorBillComponent} from "./stock-management/distributor-bill/distributor-bill.component";
import {CustomerDetailComponent} from "./reporting/customer/customer-detail/customer-detail.component";
import {OrderDetailComponent} from "./reporting/order/order-detail/order-detail.component";


const httpInterceptorProviders: Type<IHttpInterceptor>[] = [
  RequestInterceptor,
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CartComponent,
    ShopComponent,
    BackButtonComponent,
    ItemDiscountComponent,
    ProductInfoComponent,
    ProductComponent,
    BrandComponent,
    UserComponent,
    TagComponent,
    SaltComponent,
    TaxComponent,
    DistributorComponent,
    StockManagementComponent,
    ExpiryComponent,
    ShortageComponent,
    AddStockComponent,
    StockComponent,
    CheckoutComponent,
    BillingComponent,
    InventoryComponent,
    MenuComponent,
    BrandFormComponent,
    BaseTableComponent,
    BaseStockTableComponent,
    ReportingComponent,
    SaleComponent,
    OrderComponent,
    DistributorBillComponent,
    CustomerComponent,
    ProductFormComponent,
    OrderDetailComponent,
    CustomerDetailComponent,
    DistributorFormComponent,
    TagFormComponent,
    TaxFormComponent,
    SaltFormComponent,
    TableRowComponent,
    ProductSearchPipe,
    ProductBrandPipe,
    ProductDistributorPipe,
    ProductTagPipe,
    TruncatePipe,
    SearchPipe,
    ProductSaltPipe,
    KeysPipe,
    GoBackDirective
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    Ng2PaginationModule,
    MdSelectModule.forRoot(),
    CovalentCoreModule.forRoot(),
    CovalentDataTableModule.forRoot(),
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    CovalentSearchModule.forRoot(),
    TagInputModule,
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
  entryComponents: [ProductInfoComponent, CheckoutComponent, ItemDiscountComponent,
    ProductFormComponent, BrandFormComponent, TagFormComponent, TaxFormComponent, SaltFormComponent,
    DistributorFormComponent, CustomerDetailComponent, OrderDetailComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
