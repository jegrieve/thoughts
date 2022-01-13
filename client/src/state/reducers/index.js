import { combineReducers } from 'redux';
import userReducer from './userReducer';
import topicReducer from './topicReducer';
import mainTopicReducer from './mainTopicReducer';

const reducers = combineReducers({
  user: userReducer,
  topic: topicReducer,
  mainTopic: mainTopicReducer,
});

export default reducers;
