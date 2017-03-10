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

const routes: Routes = [
  {path: '', component: LoginComponent},
  {

    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'shops', component: ShopComponent},
      {
        path: 'carts',
        component: CartComponent
      }
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
  {
    path: 'reporting', component: ReportingComponent,
    children: [
      {path: 'sales', component: SaleComponent},
      {path: 'orders', component: OrderComponent},
      {path: 'customers', component: CustomerComponent},
    ]
  },

];

export const appRoutingProviders: any[] = [];

export const appRoutes: any = RouterModule.forRoot(routes, {useHash: true});
