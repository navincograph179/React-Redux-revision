import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { switchReducer } from "./switchReducer";

//we have two reducers, so we have to combine in one reducers as allReducer.
export const allReducer = combineReducers({
  counter : counterReducer,
  switch : switchReducer
})