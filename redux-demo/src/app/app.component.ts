import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store.counter';
import { INCREMENT } from './actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-demo';
  @select('counter') count;


  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      console.log(ngRedux.getState());
    });
  }

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT});
  }
}
