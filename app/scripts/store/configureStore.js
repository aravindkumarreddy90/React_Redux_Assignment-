import playListReducer from "../reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    allList: playListReducer
  }),
  applyMiddleware(thunk)
);
export default store;
