import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import * as AOS from 'aos';
import { OrderService } from 'src/app/core/services/order/order.service';


@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent  implements OnInit {

  constructor(private OrderService: OrderService) {}

    ngOnInit() {
      AOS.init({
        offset: 120,         
        delay: 500,
        duration: 1500,
        easing: 'ease-in-out',
        once: false,
        mirror: true
      });

      this.getAllOrders();
    }

    orders : any

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

  page: number = 1;
}
