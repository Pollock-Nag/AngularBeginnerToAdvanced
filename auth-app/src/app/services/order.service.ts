import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthHttp } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private authHttp: AuthHttp) { }

  getOrders() {
    return this.authHttp.get('/api/orders')
      .pipe(
        map(response => response as any));
  }
}
