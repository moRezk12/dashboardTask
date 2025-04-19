import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private _router: Router) { }
    ngOnInit() {
      AOS.init();
    }

    logout() {
      sessionStorage.removeItem('isLoggedIn');
      this._router.navigate(['/login']);
    }

}
