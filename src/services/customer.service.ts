import {Injectable} from "@angular/core";
import {RESTService, HttpInterceptorService} from "@covalent/http";
import {MOCK_API} from "../config/api.config";
import {Observable} from "rxjs";
import {Order} from "./orders.service";


export interface Customer {
  id?: string;
  email?: string;
  name?: string;
  retail_brand_id: string;
  active?: boolean;
  mobile_number: string;
  loyalty_points?: number;
  addresses?: Address[];
  total_order: number;
  total_billing: number;
  amount_due: number;
  transactions: CustomerTransaction[];
  orders: Order[];
}

export interface CustomerTransaction {

  id?: string;
  customer_id: string
  customer: Customer;
  amount: number;
}

export interface Address {
  id: string;
  name?: string;
  locality?: Locality;
}

export interface Locality {
  name: string;
  city?: City;
}

export interface City {
  name: string;
}

@Injectable()
export class CustomerService extends RESTService<Customer> {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/customer',
    });
  }


  addAddress(address: Address): Observable<any> {
    return this._http.post(MOCK_API+'address', address);
  }

  addCustomerAddress(addressId: string, customerId: string): Observable<any> {
    return this._http.post(MOCK_API+'customer_address', [{
      __action: 'add',
      customer_id: customerId,
      address_id: addressId
    }])
  }
}

@Injectable()
export class CustomerTransactionsService extends RESTService<CustomerTransaction> {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/customer_transaction',
    });
  }
}
