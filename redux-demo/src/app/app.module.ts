import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IAppState, rootReducer } from './store';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, {});
  }
}
