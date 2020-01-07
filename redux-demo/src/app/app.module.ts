import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MessagingModule } from './messaging/messaging.module';
/* import { IAppState, rootReducer, INITIAL_STATE_COUNTER } from './store.counter'; */
import { ITaskinState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/store';
import { TodoModule } from './tasking/todos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    TodoModule,
    MessagingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<ITaskinState>,
              devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(taskingReducer, TASKING_INITIAL_STATE, [], enhancers);
  }
}
