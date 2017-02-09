import { Injectable } from '@angular/core';
import {RetailShop} from "./shop.service";
import {Address, Customer} from "./customer.service";

export interface Order {

  sub_total: number;
  total: number;
  local_id: number;
  customer_id: number;
  address_id: number;
  retail_shop_id: number;
  current_status_id: number;
  created_on: Date;

  address: Address;
  items: Item[];
  customer: Customer;
  retail_shop: RetailShop;
  discounts: Discount[];
  current_status: Status;
  time_line: Status[];

}

export interface Item {

  product_id: number;
  unit_price: number;
  quantity: number;
  discount: number;
  order_id: number;
  stock_id: number;

  taxes: ItemTax[];

}

export interface ItemTax {

  tax_value: number;
  order_item_id: number;
  tax_id: number;
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
export class OrdersService {

  constructor() { }

}
