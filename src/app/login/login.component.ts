import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = 'admin@gmail.com';
  password: string = 'admin';
  loginError: boolean = false;  // لتخزين حالة الخطأ

  constructor(private _router: Router) {}

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'admin') {
      sessionStorage.setItem('isLoggedIn', 'true');
      this._router.navigate(['/dashboard']);
    } else {
      this.loginError = true;
    }
  }

}
