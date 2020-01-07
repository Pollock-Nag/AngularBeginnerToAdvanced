import { tassign } from 'tassign';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODO } from './actions';

export interface ITaskinState {
  todos: any[];
  lastUpdate: Date;
}

export const TASKING_INITIAL_STATE: ITaskinState = {
  todos: [],
  lastUpdate: null
};

function addTodo(state, action) {
  const newTodo = { id: state.todos.length + 1, title: action.title };
  return tassign(state, {
    todos: state.todos.concat(newTodo),
    lastUpdate: new Date()
  });
}

function toggleTodo(state, action) {
  // So, first we need to find the item to be modified. Here, we are finding it by it's id.
  const todo = state.todos.find(t => t.id === action.id);

  // Now, we need to find the position of this item in the array.
  const index = state.todos.indexOf(todo);

  return tassign(state, {
    todos: [
      /* Using the slice() method, we can slice an array.
      This method does not mutate the original array, and returns a new array.
      So here, we're getting all the items from the beginning to the index of the item we're going to modify. */
      ...state.todos.slice(0, index),

      /* So, we have copied all the items before the item to be modified. Now, we take a copy
      of this item and apply the mutation (isCompleted). */
      tassign(todo, { isCompleted: !todo.isCompleted}),

      // Now, we need to copy all the items after this item.
      ...state.todos.slice(index + 1)
    ],
    lastUpdate: new Date()
  });
}

function removeTodo(state, action) {
  return tassign(state, {
    todos: state.todos.filter(t => t.id !== action.id),
    lastUpdate: new Date()
  });
}

function clearTodo(state, action) {
  return tassign(state, {
    todos: [],
    lastUpdate: new Date()
  });
}

class TodoActions {
  constructor(private state, private action) {}

  addTodo() {}
}

export function taskingReducer(state: ITaskinState = TASKING_INITIAL_STATE, action): ITaskinState {
  switch (action.type) {
    case ADD_TODO:    return addTodo(state, action);
    case TOGGLE_TODO: return toggleTodo(state, action);
    case REMOVE_TODO: return removeTodo(state, action);
    case CLEAR_TODO:  return clearTodo(state, action);
  }
  return state;
}
