import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private apiUrl = 'https://6804277679cb28fb3f5a7535.mockapi.io/api/order/analystics';

  constructor(private http: HttpClient) { }

  getAnalytics(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
