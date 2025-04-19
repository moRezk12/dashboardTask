import { Component, OnInit } from '@angular/core';
import { OrderService } from '../core/services/order.service';
import { Order } from '../core/models/order';
import * as AOS from 'aos';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  pageSize = 5;
  currentPage = 1;
  showmodel: boolean = false;
  selectedOrder: Order | undefined;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {

    AOS.init();

    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  showOrderDetails(order: Order) {
    this.selectedOrder = order;
    this.showmodel = true;
  }

  closeOrderDetails() {
    this.showmodel = false;
  }

}
