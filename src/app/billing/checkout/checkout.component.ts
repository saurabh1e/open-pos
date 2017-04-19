import {Component, ElementRef, OnInit} from "@angular/core";
import {Order, OrdersService} from "../../../services/orders.service";
import {MdDialogRef} from "@angular/material";
import {IndexDBServiceService} from "../../../services/indexdb.service";
import {Address, Customer, CustomerService} from "../../../services/customer.service";
import {RetailShop, RetailShopsService} from "../../../services/shop.service";
import {Observable} from "rxjs";
import {LoadingMode, LoadingType, TdLoadingService} from "@covalent/core";
import {CartService} from "../../../services/cart.service";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  viewProviders: [CustomerService]
})
export class CheckoutComponent implements OnInit {

  cart: Order;
  shop: RetailShop;
  customers: any[];
  customer: Customer = <Customer>{addresses: <Address[]>[]};
  addresses: Address[] = [];
  address: Address = <Address>{};
  digitsArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  denominationArray: {} = {1: 0, 2: 0, 5: 0, 10: 0, 20: 0, 50: 0, 100: 0, 500: 0, 1000: 0, 2000: 0};
  total: string = '0';
  ipcRenderer: any;
  currentInvoiceNumber: number = null;
  printContent: string = null;

  constructor(public dialogRef: MdDialogRef<CheckoutComponent>,
              private _customerService: CustomerService,
              private _indexDB: IndexDBServiceService,
              private _orderService: OrdersService,
              private _cartService: CartService,
              private _shopService: RetailShopsService,
              private elRef: ElementRef,
              private _loadingService: TdLoadingService) {
    this._loadingService.create({
      name: 'checkout',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });
    try {
      this.ipcRenderer = electron.ipcRenderer;
    }
    catch (err) {

    }
  }

  ngOnInit() {
    this._indexDB.shops.get(this.cart.retail_shop_id).then((shop) => {
      this.shop = shop;
    });
    if (this.cart.customer) {
      this.customer = this.cart.customer;
      if (this.customer.id) {
        this.customers = [{display: this.customer.name, value: this.customer.id}];
        this.addCustomer({value: this.customer.id});
      }
    }
    this.cart.address_id = null;

  }

  close(): void {
    this.dialogRef.close();
  }

  enterAmount(digit: string): void {
    this.total += digit;
    this.cart.amount_paid = parseFloat(this.total);
  }

  clearAmount(): void {
    this.total = this.total.slice(0, -1);
    if (this.total.slice(-1) === '.') {
      this.total = this.total.slice(0, -1);
    }
    if (this.total.slice(-2, -1) === '.') {
      this.total = this.total.slice(0, -2);
    }
    this.cart.amount_paid = parseFloat(this.total);
  }

  clearDenomination(): void {
    this.denominationArray = {1: 0, 2: 0, 5: 0, 10: 0, 20: 0, 50: 0, 100: 0, 500: 0, 1000: 0, 2000: 0};
  }


  getCustomers = (event: string): Observable<string[]> => {
    this._loadingService.register('checkout');
    if (parseInt(event)) {
      return this._customerService.query({
        __retail_brand_id__equal: this.shop.retail_brand_id,
        __number__contains: event,
        __limit: 100,
        __only: ['id', 'name', 'mobile_number']
      }).map(data => data.data.map((item) => {
        this._loadingService.resolve('checkout');
        return item
      }), () => {

      }).catch((error) => {
        this._loadingService.resolve('checkout');
        return Observable.throw(error.json().error)
      })
    }
    else {
      return this._customerService.query({
        __retail_brand_id__equal: this.shop.retail_brand_id, __name__contains: event,
        __limit: 100,
        __only: ['id', 'name', 'mobile_number']
      })
        .map(data => data.data.map((item) => {
          this._loadingService.resolve('checkout');
          return item
        })).catch((error) => {
          this._loadingService.resolve('checkout');
          return Observable.throw(error.json().error)
        })
    }

  };

  addCustomer(event): void {
    if (event) {
      this._customerService.query({
        __id__equal: event.id,
        __include: ['addresses'],
        __limit: 1
      }).subscribe((data: { data: Customer[] }) => {
        this.cart.customer = this.customer = data.data[0];
        this.cart.customer_id = this.customer.id;
        this.saveCart();
        this.addresses = this.customer.addresses;
      });
    }
    else {
      this.clearCustomer();
    }
  }

  checkOut(): void {
    this._loadingService.register('checkout');
    this._orderService.create(this.cart).subscribe((data: { data: Order[] }) => {
      if (!this.shop.separate_offline_billing) {
        this.cart.invoice_number = data.data[0].invoice_number;
      }
      this.cart.current_status_id = data.data[0].current_status_id;
      this._cartService.setCart(this.cart, this.cart.local_id).then(()=>{
        this._cartService.updateStock(this.cart).then((status) => {
          this._loadingService.resolve('checkout');

        });
      });
    }, (err: ProgressEvent) => {
      if (err.type === 'error') {
        this.cart.invoice_number = null;
      }
      this._loadingService.resolve('checkout');
    })
  }

  settle(): void {
    this.dialogRef.close(this.cart.invoice_number);
  }

  saveCustomer(): void {
    this.customer.retail_brand_id = this.shop.retail_brand_id;
    this._customerService.create(this.customer).subscribe((data: { data: Customer[] }) => {
      this.cart.customer_id = data.data[0].id;
      this.customer = data.data[0];
    });
  }

  clearCustomer(): void {
    this.cart.customer = null;
    this.cart.customer_id = null;
    this.customer = <Customer>{retail_brand_id: this.shop.retail_brand_id};
    this.customers = [];
    this.addresses = [];
    this.saveCart();
  }

  saveCart(): void {
    this._cartService.setCart(this.cart, this.cart.local_id).then()
  }

  clearAddress(): void {
    this.cart.address_id = null;
    this.address.name = null;
  }

  addAddress(): void {
    this._loadingService.register('checkout');
    this._customerService.addAddress(this.address).subscribe((data: { data: Address[] }) => {
      this._customerService.addCustomerAddress(data.data[0].id, this.customer.id).subscribe(() => {
        this.address.id = data.data[0].id;
        this.addresses = this.addresses.concat(this.address);
        this.cart.address_id = this.address.id;
        this._loadingService.resolve('checkout');
      }, () => {
        this._loadingService.resolve('checkout');
      })
    }, () => {
      this._loadingService.resolve('checkout');
    })
  }

  print(type: string): void {
    if (this.shop.separate_offline_billing && isNaN(this.cart.invoice_number) ) {
      this._indexDB.configs.get(this.shop.id).then((data) => {
        this.cart.invoice_number = data.invoiceNumber + 1;
        this.increaseInvoiceNumber();
        this.printBill(type);

      });
      return
    }
    this.printBill(type);
    return ;


  }

  printBill(type: string): void {

    if (!this.printContent) {
      try {
        this.ipcRenderer.send('printBill',
          this.renderHtml(this.elRef.nativeElement.querySelector('#'+type)).innerHTML)

      }
      catch (err) {
        let wnd = window.open("about:blank", "", "_blank");
        wnd.document.write(this.renderHtml(this.elRef.nativeElement.querySelector('#'+type)).innerHTML);
        wnd.print();

      }
    }
    else {
      try {
        if (this.ipcRenderer.send('printBill', this.printContent)) {

        }
      }
      catch (err) {
        let wnd = window.open("about:blank", "", "_blank");
        wnd.document.write(this.printContent);
        wnd.print();

      }
    }
  }


  renderHtml(element: any) {
    if (element.querySelector('#shopName')) {
      element.querySelector('#shopName').innerHTML = this.shop.name;
    }
    if (element.querySelector('#dueDate')) {
      element.querySelector('#dueDate').innerHTML = this.cart.created_on.toLocaleString();
    }
    if (element.querySelector('#billDate')) {
      element.querySelector('#billDate').innerHTML = this.cart.created_on.toLocaleString();
    }
    if (element.querySelector('#customerName')) {
      element.querySelector('#customerName').innerHTML = this.cart.customer.name || null;
    }
    if (element.querySelector('#customerNumber')) {
      element.querySelector('#customerNumber').innerHTML = this.cart.customer.mobile_number || null;
    }
    if (element.querySelector('#invoiceNumber')) {
      element.querySelector('#invoiceNumber').innerHTML = ('#' + this.pad(this.cart.invoice_number, 5)) || null;
    }
    if (element.querySelector('#subTotal')) {
      element.querySelector('#subTotal').innerHTML = (this.cart.sub_total || 0).toString() + '/-';
    }
    if (element.querySelector('#total')) {
      element.querySelector('#total').innerHTML = (this.cart.total || 0).toString() + '/-';
    }
    if (element.querySelector('#discount')) {
      element.querySelector('#discount').innerHTML = ((this.cart.additional_discount || 0) +
        (this.cart.auto_discount || 0)).toString() + '/-';
    }
    if (element.querySelector('#taxParent')) {
      let taxes = {};
      this.cart.items.forEach((item) => {
        item.taxes.forEach((tax) => {
          if (tax.tax.name in taxes) {
            taxes[tax.tax.name] += tax.tax_amount;
          }
          else {
            taxes[tax.tax.name] = tax.tax_amount;
          }
        })
      });
      let taxRow = element.querySelector('#taxParent').children[0].children[0];
      let taxName = taxRow.children[1];
      let taxValue = taxRow.children[2];
      for (let i in taxes) {
        if (taxes.hasOwnProperty(i)) {
          taxName.innerHTML = i;
          taxValue.innerHTML = taxes[i] + '/';
          element.querySelector('#taxParent2').innerHTML += taxRow.outerHTML;

        }
      }
      element.querySelector('#taxParent').innerHTML = null;

    }
    if (element.querySelector('#item')) {

      let itemRow = element.querySelector('#item').children[0].children[0];
      let itemName = itemRow.children[0];
      let itemQuantity = itemRow.children[1];
      let itemPrice = itemRow.children[2];
      this.cart.items.forEach((item) => {
        itemName.innerHTML = item.name;
        itemQuantity.innerHTML = 'x' + item.quantity;
        itemPrice.innerHTML = item.unit_price + '/-';

        element.querySelector('#item2').innerHTML += itemRow.outerHTML;
      });

      element.querySelector('#item').innerHTML = null;

    }
    if (element.querySelector('#regParent')) {

      let regRow = element.querySelector('#regParent').children[0].children[0];
      let regName = regRow.children[0];
      let regValue = regRow.children[1];
      this.shop.registration_details.forEach((reg) => {
        regName.innerHTML = reg.name;
        regValue.innerHTML = reg.value;

        element.querySelector('#regParent2').innerHTML += regRow.outerHTML;
      });

      element.querySelector('#regParent').innerHTML = null;

    }

    if (element.querySelector('#address1')) {
      element.querySelector('#address1').innerHTML = this.address.name || '';
    }
    this.printContent = element.innerHTML;
    return element;
  }

  pad(num: number, size: number): string {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  increaseInvoiceNumber() {
    if (this.shop.separate_offline_billing) {
      this._indexDB.configs.update(this.shop.id, {invoiceNumber: this.cart.invoice_number}).then((data) => {
        this._shopService.update(this.shop.id, {id: this.shop.id, invoice_number: this.cart.invoice_number}).subscribe();
        this._cartService.setCart(this.cart, this.cart.local_id).then();
      })
    }

  }

}
