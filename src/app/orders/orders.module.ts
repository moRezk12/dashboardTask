import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrdersHomeComponent } from './orders-home/orders-home.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    OrdersComponent,
    OrdersHomeComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    NgxPaginationModule
  ]
})
export class OrdersModule { }
