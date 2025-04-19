import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [

    provideCharts(withDefaultRegisterables()),
    {provide : LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
