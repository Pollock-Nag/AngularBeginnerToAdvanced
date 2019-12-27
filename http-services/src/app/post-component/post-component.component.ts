import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

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
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response as any;
    }, error => {
      alert('An unexpected error ocurred.');
      console.log(`An unexpected error ocurred in ${this.ngOnInit} ${error}`);
    });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe((response: any) => {
        response = response as Object;
        post['id'] = response.id;
        this.posts.splice(0, 0, post);
        console.log(response);
      }, error => {
        alert('An unexpected error ocurred.');
        console.log(`An unexpected error ocurred in ${this.createPost} ${error}`);
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe((response: any) => {
          console.log('updatePost', response as any);
      }, error => {
        alert('An unexpected error ocurred.');
        console.log(`An unexpected error ocurred in ${this.updatePost} ${error}`);
      });
  }
  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, error => {
        alert('An unexpected error ocurred.');
        console.log(`An unexpected error ocurred in ${this.deletePost} ${error}`);
      });
      console.log(`item deleted ${post.id}`);
  }
}
