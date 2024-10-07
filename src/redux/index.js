import { createStore } from "redux";
import { allReducer } from "./reducer";

export const store = createStore(allReducer);