import {Component, ElementRef, OnInit} from "@angular/core";
import {Order, OrdersService} from "../../../services/orders.service";
import {MdDialogRef} from "@angular/material";
import {IndexDBServiceService} from "../../../services/indexdb.service";
import {Customer, CustomerService, Address} from "../../../services/customer.service";
import {RetailShop, RetailShopsService} from "../../../services/shop.service";
import {Observable} from "rxjs";
import {TdLoadingService, LoadingType, LoadingMode} from "@covalent/core";
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
  ipcRenderer:any;
  currentInvoiceNumber: number;

  constructor(public dialogRef: MdDialogRef<CheckoutComponent>,
              private _customerService: CustomerService,
              private _indexDB: IndexDBServiceService,
              private _orderService: OrdersService,
              private _cartService: CartService,
              private _shopService: RetailShopsService,
              private elRef:ElementRef,
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
    catch(err){

    }
  }

  ngOnInit() {
    this._indexDB.shops.get(this.cart.retail_shop_id).then((shop) => {
      this.shop = shop;
      this._indexDB.configs.get(this.shop.id).then((data)=>{
        this.currentInvoiceNumber = data.invoiceNumber+1;
      })
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
        console.log('ddd')

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
      }).subscribe((data: {data: Customer[]}) => {
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
    this._orderService.create(this.cart).subscribe((data: {data: Order[]}) => {
      this._cartService.updateStock(this.cart).then((status)=>{
        console.log(status);
        this._loadingService.resolve('checkout');
        this.dialogRef.close(data.data[0].reference_number);
      });

    }, () => {
      this._loadingService.resolve('checkout');
    })
  }

  saveCustomer(): void {
    this.customer.retail_brand_id = this.shop.retail_brand_id;
    this._customerService.create(this.customer).subscribe((data: {data: Customer[]}) => {
      console.log(data);
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
  clearAddress():void {
    this.cart.address_id = null;
    this.address.name = null;
  }

  addAddress(): void {
    this._loadingService.register('checkout');
    this._customerService.addAddress(this.address).subscribe((data: {data: Address[]})=>{
      console.log(data);
      this._customerService.addCustomerAddress(data.data[0].id, this.customer.id).subscribe(()=>{
        this.address.id = data.data[0].id;
        this.addresses = this.addresses.concat(this.address);
        this.cart.address_id = this.address.id;
        this._loadingService.resolve('checkout');
      }, ()=>{this._loadingService.resolve('checkout');})
    }, ()=>{
      this._loadingService.resolve('checkout');
    })
  }

  printBill():void {
    //#TODO Very Bad DOM manipulation need to change

    let a  = this.elRef.nativeElement.querySelector('#print-selection');
    if (a.querySelector('#shopName')) {
      a.querySelector('#shopName').innerHTML = this.shop.name;
    }
    if (a.querySelector('#dueDate')) {
      a.querySelector('#dueDate').innerHTML = this.cart.created_on.toLocaleString();
    }
    if (a.querySelector('#billDate')) {
      a.querySelector('#billDate').innerHTML = this.cart.created_on.toLocaleString();
    }
    if (a.querySelector('#customerName')) {
      a.querySelector('#customerName').innerHTML = this.cart.customer.name || null;
    }
    if (a.querySelector('#customerNumber')) {
      a.querySelector('#customerNumber').innerHTML = this.cart.customer.mobile_number || null;
    }
    if (a.querySelector('#invoiceNumber')) {
      a.querySelector('#invoiceNumber').innerHTML = '#' + this.pad(this.currentInvoiceNumber, 5) || null;
    }
    if (a.querySelector('#subTotal')) {
      a.querySelector('#subTotal').innerHTML = (this.cart.sub_total  || 0).toString() + '/-';
    }
    if (a.querySelector('#total')) {
      a.querySelector('#total').innerHTML = (this.cart.total || 0).toString()  + '/-';
    }
    if (a.querySelector('#discount')) {
      a.querySelector('#discount').innerHTML = ((this.cart.additional_discount || 0) +
        (this.cart.auto_discount || 0)).toString() + '/-';
    }
    if (a.querySelector('#taxParent')) {
      let taxes = {};
      this.cart.items.forEach((item)=>{
       item.taxes.forEach((tax)=>{
         console.log(tax);
         if (tax.tax.name in taxes) {
            taxes[tax.tax.name] += tax.tax_amount;
          }
          else {
            taxes[tax.tax.name] = tax.tax_amount;
          }
        })
      });
      let taxRow = a.querySelector('#taxParent').children[0].children[0];
      let taxName = taxRow.children[1];
      let taxValue = taxRow.children[2];
      for (let i in taxes) {
        if (taxes.hasOwnProperty(i)) {
          taxName.innerHTML = i;
          taxValue.innerHTML = taxes[i] + '/';
          a.querySelector('#taxParent2').innerHTML += taxRow.outerHTML;

        }
      }
      a.querySelector('#taxParent').innerHTML = null;

    }
    if (a.querySelector('#item')) {

      let itemRow = a.querySelector('#item').children[0].children[0];
      let itemName = itemRow.children[0];
      let itemQuantity = itemRow.children[1];
      let itemPrice = itemRow.children[2];
      this.cart.items.forEach((item)=>{
        itemName.innerHTML = item.name;
        itemQuantity.innerHTML = 'x' + item.quantity;
        itemPrice.innerHTML = item.unit_price + '/-';

        a.querySelector('#item2').innerHTML += itemRow.outerHTML;
      });

      a.querySelector('#item').innerHTML = null;

    }

    if (a.querySelector('#address1')) {
      a.querySelector('#address1').innerHTML = this.address.name || '';
    }

    try{
      if (this.ipcRenderer.send('printBill', a.innerHTML)) {
        this.increaseInvoiceNumber()
      }
    }
    catch(err){
      let wnd = window.open("about:blank", "", "_blank");
      wnd.document.write(a.innerHTML);
      wnd.print();
      this.increaseInvoiceNumber()
    }

  }

  pad(num:number, size:number): string {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  increaseInvoiceNumber(){
    this._indexDB.configs.update(this.shop.id, {invoiceNumber: this.currentInvoiceNumber}).then((data)=>{
      this._shopService.update(this.shop.id, {id: this.shop.id, invoice_number: this.currentInvoiceNumber}).subscribe()
    })
  }

}
