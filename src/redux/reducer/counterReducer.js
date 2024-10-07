import { counterTypes } from "../action/counterAction";
//import counterTypes from action folder of counterAction for reducer
const initialState = 0
//suppose initialState is zero
export const counterReducer = (state = initialState, action) => {
    switch(action.type) {
      case counterTypes.INCREMENT:
        //if increment add by one
        return state + 1;
      case counterTypes.DECREMENT:
        // if decrement minus by one
        return state - 1;  
      default:
        //and the default is zero that is state = initialState
        return state;  
    }
}