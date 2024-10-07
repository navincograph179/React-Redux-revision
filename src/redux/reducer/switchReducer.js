import { switchTypes } from "../action/switchAction";

const initialState = {enable : true};

export const switchReducer = (state = initialState, action) => {
  switch(action.type) {
    case switchTypes.ENABLE_SWITCH:
      return {enable : true};
    case switchTypes.DISABLE_SWITCH:
      return {enable : false};
    default:
      return state;
  }

}