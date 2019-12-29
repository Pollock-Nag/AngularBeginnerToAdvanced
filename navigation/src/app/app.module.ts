import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [

  BrowserModule,
    RouterModule.forRoot([
      { path: '/', component: HomeComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'profile/:username', component: GithubProfileComponent }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
