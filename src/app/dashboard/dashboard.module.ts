import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AnalyticsCardsComponent } from './analytics-cards/analytics-cards.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { BaseChartDirective } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    AnalyticsCardsComponent,
    LineChartComponent,
    BarChartComponent,
    RecentOrdersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BaseChartDirective,
    NgxPaginationModule
  ]
})
export class DashboardModule { }
