import {combineReducers} from 'redux';
import loginReducer from './login';
import productReducer from './product';

const rootReducer = combineReducers({
  login: loginReducer,
  product: productReducer,
});

export default rootReducer;
