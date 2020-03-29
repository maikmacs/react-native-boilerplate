import {combineReducers} from 'redux';
import {authReducer} from '../store/auth/reducers';

export default combineReducers({
  auth: authReducer,
});
