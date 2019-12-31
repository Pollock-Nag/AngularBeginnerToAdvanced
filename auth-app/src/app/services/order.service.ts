import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthHttp } from 'angular2-jwt';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private authHttp: AuthHttp, private http: HttpClient) { }

  getOrders() {
    return this.authHttp.get('/api/orders')
      .pipe(
        map(response => response as any));
  }
}
