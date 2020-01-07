import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TodoService {
  private todos = [];
  public todoAdded = new EventEmitter();
  public todoToggled = new EventEmitter();
  public todoRemoved = new EventEmitter();
  public todosCleared = new EventEmitter();

  addTodo(title) {
    const todo = { id: this.todos.length + 1, title: title };
    this.todos.push(todo);
    this.todoAdded.emit(todo);
  }

  toggleTodo(todo) {
    todo.isCompleted = !todo.isCompleted;
    this.todoToggled.emit(todo);
  }

  removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.todoRemoved.emit(todo);
  }

  getTodos() {
    return this.todos;
  }

  clearTodos() {
    this.todos = [];
    this.todosCleared.emit();
  }
}

