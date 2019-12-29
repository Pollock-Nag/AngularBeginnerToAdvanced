import { Injectable } from '@angular/core';
import { DataService } from './../../../../http-services/src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService {

  constructor(http: HttpClient) {
    super('https://api.github.com/users/jorgeemherrera/followers', http);
   }
}
