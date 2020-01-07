import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { CLEAR_TODO } from '../../tasking/actions';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {

  // With Service

  /* todos: number;
  lastUpdate;
  constructor(private service: TodoService) {
    this.todos = service.getTodos().length;

    service.todoAdded.subscribe(() => {
      this.todos++;
      this.lastUpdate = new Date();
    });

    service.todoRemoved.subscribe(() => {
      this.todos--;
      this.lastUpdate = new Date();
    });

    service.todoToggled.subscribe(() => {
      this.lastUpdate = new Date();
    });

    service.todosCleared.subscribe(() => {
      this.todos = 0;
      this.lastUpdate = new Date();
    });
  }
  clearTodos() {
    this.service.clearTodos();
  } */

  // With Redux
  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODO });
  }
}
