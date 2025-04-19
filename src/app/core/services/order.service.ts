import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [
    { id: 1, itemName: 'Laptop', quantity: 1, date: '12/8/2005', price: 1500, status: 'Delivered' },
    { id: 2, itemName: 'Mouse', quantity: 2, date: '12/8/2005', price: 40, status: 'Pending' },
    { id: 3, itemName: 'Keyboard', quantity: 1, date: '12/8/2005', price: 100, status: 'Cancelled' },
    { id: 4, itemName: 'Monitor', quantity: 1, date: '12/8/2005', price: 300, status: 'Delivered' },
    { id: 5, itemName: 'Chair', quantity: 2, date: '12/8/2005', price: 200, status: 'Pending' },
    { id: 6, itemName: 'Headset', quantity: 1, date: '12/8/2005', price: 80, status: 'Delivered' },
    { id: 7, itemName: 'Desk', quantity: 1, date: '12/8/2005', price: 400, status: 'Delivered' },
    { id: 8, itemName: 'USB Hub', quantity: 3, date: '12/8/2005', price: 25, status: 'Pending' },
    { id: 9, itemName: 'Monitor', quantity: 1, date: '12/8/2005', price: 300, status: 'Delivered' },
    { id: 10, itemName: 'Chair', quantity: 2, date: '12/8/2005', price: 200, status: 'Pending' },
    { id: 11, itemName: 'Headset', quantity: 1, date: '12/8/2005', price: 80, status: 'Delivered' },
    { id: 12, itemName: 'Desk', quantity: 1, date: '12/8/2005', price: 400, status: 'Delivered' },
    { id: 13, itemName: 'USB Hub', quantity: 3, date: '12/8/2005', price: 25, status: 'Pending' }
  ];

  constructor() {}

  getOrders(): Observable<Order[]> {
    return of(this.orders); // simulate HTTP call
  }

  getOrderById(id: number): Observable<Order | undefined> {
    const order = this.orders.find(o => o.id === id);
    return of(order);
  }
}
