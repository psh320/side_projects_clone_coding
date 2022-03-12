import { combineReducers } from 'redux';
import authReducer from './authReducer';
import fishReducer from './fishReducer';

export default combineReducers({
	auth: authReducer,
	fish: fishReducer
});