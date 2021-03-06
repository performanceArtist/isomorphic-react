import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import test from '@components/TSTest/redux/reducer';
import request from './api/reducer';

const rootReducer = combineReducers({
  test,
  request
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
