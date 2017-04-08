import {Component, OnInit} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {TdLoadingService, LoadingType, LoadingMode} from "@covalent/core";
import {Order, OrdersService} from "../../../../services/orders.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {

  order: Order;

  constructor(public dialogRef: MdDialogRef<OrderDetailComponent>,
              private _orderService: OrdersService,
              private _loadingService: TdLoadingService) {
    this._loadingService.create({
      name: 'order-detail',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });

  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
