import { combineReducers } from "redux";
import AuthReducer from './auth';
import LoginReducer from './login';
import ModalReducer from './modal';
  
const RootReducer = combineReducers({
    AuthReducer,
    LoginReducer,
    ModalReducer
})

export default RootReducer;