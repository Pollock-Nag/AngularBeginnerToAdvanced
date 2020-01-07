import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions';
import { REFERENCE_PREFIX } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  // With Service

  // constructor(private service: TodoService ) { }

  /* addTodo(input) {
    if (!input.value) {
      return;
    } else {
      this.service.addTodo(input.value);
      input.value = '';
    }
  }

  toggleTodo(todo) {
    this.service.toggleTodo(todo);
  }

  removeTodo(todo) {
    this.service.removeTodo(todo);
  } */

  // With Redux

  @select() todos;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  addTodo(input) {
    if (!input.value) {
      return;
    } else {
      this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });
      input.value = '';
    }
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }
}
