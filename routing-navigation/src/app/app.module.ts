import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FollowersComponent } from './components/followers/followers.component';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostsComponent } from './components/posts/posts.component';
import { GithubFollowersService } from './services/github-followers.service';

@NgModule({
  declarations: [
    AppComponent,
    FollowersComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:id', component: GithubProfileComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent }
    ]),
  ],
  providers: [ GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
