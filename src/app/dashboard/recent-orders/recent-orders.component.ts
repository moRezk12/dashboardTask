import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import * as AOS from 'aos';


@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent  implements OnInit {

    ngOnInit() {
      AOS.init({
        offset: 120,         // المسافة قبل بداية الأنميشن
        delay: 500,          // تأخير الأنميشن (ms)
        duration: 1500,      // مدة الأنميشن (ms)
        easing: 'ease-in-out', // نوع الحركة
        once: false,           // يتحرك مرة واحدة فقط
        mirror: true       // ميتكررش لما تطلع وتنزل
      });
    }

  orders: Order[] = [
    // بيانات وهمية كثيرة للعرض
    { id: 1, itemName: 'Laptop', quantity: 1, date: '2025-04-18', price: 1500, status: 'Delivered' },
    { id: 2, itemName: 'Mouse', quantity: 2, date: '2025-04-17', price: 50, status: 'Pending' },
    { id: 3, itemName: 'Keyboard', quantity: 1, date: '2025-04-16', price: 80, status: 'Cancelled' },
    { id: 4, itemName: 'Monitor', quantity: 1, date: '2025-04-15', price: 200, status: 'Delivered' },
    { id: 5, itemName: 'Headset', quantity: 2, date: '2025-04-14', price: 120, status: 'Pending' },
    { id: 6, itemName: 'USB Cable', quantity: 3, date: '2025-04-13', price: 30, status: 'Delivered' },
    { id: 7, itemName: 'Phone', quantity: 1, date: '2025-04-12', price: 800, status: 'Cancelled' },
    { id: 8, itemName: 'Camera', quantity: 1, date: '2025-04-11', price: 900, status: 'Delivered' },
    { id: 9, itemName: 'Tablet', quantity: 1, date: '2025-04-10', price: 600, status: 'Pending' },
    { id: 10, itemName: 'Charger', quantity: 2, date: '2025-04-09', price: 40, status: 'Delivered' },
    // Add more if needed
  ];

  page: number = 1;
}
