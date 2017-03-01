import { Injectable } from '@angular/core';
import {RetailShop} from "./shop.service";
import {Address, Customer} from "./customer.service";
import {Tax} from "./items.service";
import {RESTService, HttpInterceptorService} from "@covalent/http";
import {MOCK_API} from "../config/api.config";

export interface Order {

  id: number;
  sub_total: number;
  total: number;
  auto_discount: number;
  local_id: number;
  customer_id: number;
  amount_paid: number
  address_id: number;
  retail_shop_id: number;
  current_status_id: number;
  created_on: Date;
  additional_discount: number;
  is_void: boolean;

  taxes: {total: number,};
  address: Address;
  items: Item[];
  customer: Customer;
  retail_shop: RetailShop;
  discounts: Discount[];
  current_status: Status;
  time_line: Status[];

}

export interface Item {

  name: string;
  product_id: number;
  unit_price: number;
  quantity: number;
  discount: number;
  order_id: number;
  stock_id: number;
  discounted_total_price: number;
  discounted_unit_price: number;
  children: Item[];
  taxes: ItemTax[];
  total_price: number;
  is_combo: boolean;
  discount_amount: number;
  max_units: number;

}

export interface ItemTax {

  tax_value: number;
  tax_amount: number
  order_item_id: number;
  tax_id: number;
  tax: Tax
}

export interface Discount {

  name: number;
  value: number;
  type: string;

}

export interface Status {
  name: string;
  code: number;

}

@Injectable()
export class OrdersService extends RESTService<Order> {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/order',
    });
  }

}
