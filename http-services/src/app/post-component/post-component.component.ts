import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
    .subscribe(posts => this.posts = posts as any);
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';
    this.service.create(post)
      .subscribe(
        (newPost: any) => {
          post['id'] = newPost.id;
          console.log(newPost);
      }, (error: AppError) => {
            this.posts.splice(0, 1);

            if (error instanceof BadInput) {
              /* this.form.setErrors(error.originalError); */
            } else {
              throw error;
            }
      });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        (updatedPost) => {
          console.log('updatePost', updatedPost);
      });
  }
  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(345)
      .subscribe(
         null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted');
          console.log(`item deleted ${post.id}`);
        } else {
          throw error;
        }
      });
  }
}
