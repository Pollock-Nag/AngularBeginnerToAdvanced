import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any;

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials) {
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials))
      .pipe(
        map(response => {
          let result = response as any;
          if (result && result.token) {
            localStorage.setItem('token', result.token);
            return true;
          }
          return false;
        })
      );
  }

  logOut() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return tokenNotExpired();
  }

  get currentUserA() {
    let token = localStorage.getItem('token');
    if (!token){
      return null;
    }
    return new JwtHelper().decodeToken(token);
  }
}
