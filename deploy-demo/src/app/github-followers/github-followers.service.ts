
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubFollowersService {
  private readonly _url = 'https://api.github.com/users/jorgeemherrera/followers';

  constructor(private http: HttpClient) {  }

  getFollowers() {
    return this.http.get(this._url)
      .map(response => response);
  }
}
