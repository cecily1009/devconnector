//Reducers specify how the application's state changes in response to actions sent to the store.
//Remember that actions only describe what happened, but don't describe how the application's state changes.
import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
});
