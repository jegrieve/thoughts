import { combineReducers } from 'redux';
import userReducer from './userReducer';
import topicReducer from './topicReducer';
import mainTopicReducer from './mainTopicReducer';
import homePostReducer from './homePostReducer';
import homeLimitReducer from './homeLimitReducer';

const reducers = combineReducers({
  user: userReducer,
  topic: topicReducer,
  mainTopic: mainTopicReducer,
  homePost: homePostReducer,
  homeLimit: homeLimitReducer,
});

export default reducers;
