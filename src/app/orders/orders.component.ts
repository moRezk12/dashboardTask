import { OrderService } from './../core/services/order/order.service';
import { Component, OnInit } from '@angular/core';
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

  constructor(private OrderService: OrderService) {}

  ngOnInit(): void {

    AOS.init();
    this.getAllOrders();
  }

  getAllOrders() {
    this.OrderService.getOrders().subscribe({
      next: (res) => {
        console.log(res);
        this.orders = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  showOrderDetails(order: Order) {
    this.selectedOrder = order;
    this.showmodel = true;
  }

  closeOrderDetails() {
    this.showmodel = false;
  }

}
