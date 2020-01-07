import { tassign } from 'tassign';
import { INCREMENT, DECREMENT } from './actions';
import { ITaskinState, TASKING_INITIAL_STATE } from './tasking/store';

export interface IAppState {
  tasking: ITaskinState;
  newMessages: number;
}

export const INITIAL_STATE: IAppState = {
  tasking: TASKING_INITIAL_STATE,
  newMessages: 0
};

function increment(state, action) {
  return tassign(state, { newMessages: state.newMessages + 1 });
}

function decrement(state, action) {
  return tassign(state, { newMessages: state.newMessages - 1 });
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case INCREMENT: return increment(state, action);
    case DECREMENT: return decrement(state, action);
  }
  return state;
}
