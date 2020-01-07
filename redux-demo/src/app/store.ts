import { IMessagingState, MESSAGING_INITIAL_STATE, messagingReducer } from './messaging/store';
import { ITaskinState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/store';
import { combineReducers } from 'redux';

export interface IAppState {
  tasking: ITaskinState;
  newMessages: IMessagingState;
}

export const INITIAL_STATE: IAppState = {
  tasking: TASKING_INITIAL_STATE,
  newMessages: MESSAGING_INITIAL_STATE
};

export const rootReducer = combineReducers({
  tasking: taskingReducer,
  newMessages: messagingReducer
});
