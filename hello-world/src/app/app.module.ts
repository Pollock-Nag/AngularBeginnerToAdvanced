import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponentComponent } from './components/courses-component/courses-component.component';
import { CoursesService } from './components/courses-component/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
