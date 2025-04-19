import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { AnalyticsService } from 'src/app/core/services/Analytics/analytics.service';


@Component({
  selector: 'app-analytics-cards',
  templateUrl: './analytics-cards.component.html',
  styleUrls: ['./analytics-cards.component.scss']
})
export class AnalyticsCardsComponent implements OnInit {

  constructor(private analyticsServices : AnalyticsService ) { }

  ngOnInit() {
    AOS.init();
    this.getAllAnalytics();
  }

  analytics : any

  getAllAnalytics(){
    this.analyticsServices.getAnalytics().subscribe({
      next : (res) => {
        console.log(res);
        this.analytics = res
      },
      error : (err) => {
        console.log(err);
      }
    })
  }


}
