import { combineReducers } from 'redux';
import userReducer from './userReducer';
import topicReducer from './topicReducer';
import mainTopicReducer from './mainTopicReducer';
import homePostReducer from './homePostReducer';
import homeLimitReducer from './homeLimitReducer';
import homePostOrderReducer from './homePostOrderReducer';

const reducers = combineReducers({
  user: userReducer,
  topic: topicReducer,
  mainTopic: mainTopicReducer,
  homePost: homePostReducer,
  homeLimit: homeLimitReducer,
  homePostOrder: homePostOrderReducer,
});

export default reducers;
