import {Routes, RouterModule} from "@angular/router";
import {BillingComponent} from "./billing/billing.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CartComponent} from "./dashboard/carts/carts.component";
import {ShopComponent} from "./dashboard/shops/shops.component";
import {LoginComponent} from "./login/login.component";
import {ProductComponent} from "./inventory/product/product.component";
import {BrandComponent} from "./inventory/brand/brand.component";
import {TagComponent} from "./inventory/tag/tag.component";
import {TaxComponent} from "./inventory/tax/tax.component";
import {DistributorComponent} from "./inventory/distributor/distributor.component";
import {SaltComponent} from "./inventory/salt/salt.component";
import {InventoryComponent} from "./inventory/inventory.component";
import {MenuComponent} from "./inventory/menu/menu.component";
import {ReportingComponent} from "./reporting/reporting.component";
import {SaleComponent} from "./reporting/sale/sale.component";
import {OrderComponent} from "./reporting/order/order.component";
import {CustomerComponent} from "./reporting/customer/customer.component";
import {StockManagementComponent} from "./stock-management/stock-management.component";
import {ExpiryComponent} from "./stock-management/expiry/expiry.component";
import {ShortageComponent} from "./stock-management/shortage/shortage.component";
import {AddStockComponent} from "./stock-management/add-stock/add-stock.component";
import {StockComponent} from "./stock-management/stock/stock.component";
import {DistributorBillComponent} from "./stock-management/distributor-bill/distributor-bill.component";
import {StaffComponent} from "./staff/staff.component";
import {StockReportComponent} from "./reporting/stock-report/stock-report.component";
import {CustomerReportComponent} from "./reporting/customer-report/customer-report.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'stock', component: StockManagementComponent,
    children: [
      {path: 'expiry', component: ExpiryComponent},
      {path: 'shortage', component: ShortageComponent},
      {path: 'stocks', component: StockComponent},
      {path: 'add-stocks', component: AddStockComponent},
      {path: 'bills', component: DistributorBillComponent}
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'shops', component: ShopComponent},
      {path: 'carts', component: CartComponent}
    ]
  },
  {
    path: 'inventory', component: InventoryComponent,
    children: [
      {path: 'menu', component: MenuComponent},
      {path: 'products', component: ProductComponent},
      {path: 'brands', component: BrandComponent},
      {path: 'distributors', component: DistributorComponent},
      {path: 'tags', component: TagComponent},
      {path: 'taxes', component: TaxComponent},
      {path: 'salts', component: SaltComponent},
    ]
  },
  {path: 'billing/:id', component: BillingComponent},
  {path: 'staff', component: StaffComponent},
  {
    path: 'reporting', component: ReportingComponent,
    children: [
      {path: 'sales', component: SaleComponent},
      {path: 'orders', component: OrderComponent},
      {path: 'stock-report', component: StockReportComponent},
      {path: 'customer-report', component: CustomerReportComponent},
      {path: 'customers', component: CustomerComponent},
    ]
  },

];

export const appRoutingProviders: any[] = [];

export const appRoutes: any = RouterModule.forRoot(routes, {useHash: true});
