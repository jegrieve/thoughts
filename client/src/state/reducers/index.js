import { combineReducers } from 'redux';
import userReducer from './accountReducer';

const reducers = combineReducers({
  user: userReducer,
});

export default reducers;
