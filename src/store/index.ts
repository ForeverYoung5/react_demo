import { combineReducers,createStore,applyMiddleware } from 'redux';
import countReducer from "./reducers/count";
import userReducer from "./reducers/user";
import {loggerStateMiddleware,loggerActionMiddleware} from './middlewares/index'

export interface IAction {
  type: string
};


const rootReducer = combineReducers({
  count:countReducer,
  user:userReducer
});

const store = createStore(rootReducer,applyMiddleware(loggerStateMiddleware,loggerActionMiddleware));

export default store;