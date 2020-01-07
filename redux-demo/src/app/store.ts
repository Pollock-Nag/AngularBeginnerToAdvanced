import { tassign } from 'tassign';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODO } from './actions';

export interface IAppState {
  todos: any[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { id: state.todos.length + 1, title: action.title };
      return tassign(state, {
        todos: state.todos.concat(newTodo),
        lastUpdate: new Date()
      });

    case TOGGLE_TODO:
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

    case REMOVE_TODO:
      return tassign(state, {
        todos: state.todos.filter(t => t.id !== action.id),
        lastUpdate: new Date()
      });

    case CLEAR_TODO:
      return tassign(state, {
        todos: [],
        lastUpdate: new Date()
      });
  }
  return state;
}
