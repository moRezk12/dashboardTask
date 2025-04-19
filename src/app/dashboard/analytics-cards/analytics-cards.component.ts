import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-analytics-cards',
  templateUrl: './analytics-cards.component.html',
  styleUrls: ['./analytics-cards.component.scss']
})
export class AnalyticsCardsComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }

  analytics = [
    { title: 'Total Revenue', value: '$950', icon: '📈' , presentP : '+3,4%' },
    { title: 'Total Revenue', value: '$950', icon: '📈' , presentN : '-3,4%' },
    { title: 'Items Sold', value: '1,250', icon: '🛒' },
    { title: 'Active Users', value: '785', icon: '👤' },
  ];


}
