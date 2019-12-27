import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private url = 'https://jsonplaceholder.typicode.com/posts';

  getPosts() {
    return this.http.get(this.url).pipe(
      catchError(this.handleError)
    );
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      catchError(this.handleError)
    );
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRed: true})).pipe(
      catchError(this.handleError)
    );
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError());
    } else {
      return throwError(new AppError(error));
    }
  }
}
