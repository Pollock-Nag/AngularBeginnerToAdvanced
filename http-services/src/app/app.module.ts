import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    PostComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    { provide: ErrorHandler,
      useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
