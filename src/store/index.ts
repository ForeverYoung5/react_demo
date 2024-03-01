import { combineReducers,createStore } from 'redux';
import countReducer from "./reducers/count";
import userReducer from "./reducers/user";

export interface IAction {
  type: string
};


const rootReducer = combineReducers({
  count:countReducer,
  user:userReducer
});

const store = createStore(rootReducer);

export default store;