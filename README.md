<div style="color: red; font-weight: bold;">Reducer</div> A pure function that takes the current state and an action as arguments and returns a new state. It defines how the state should change in response to actions.

``` 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};
```

**Action:**  A plain JavaScript object that describes what happened. It must have a type property, and optionally, other data (payload) to update the state.
```
const incrementAction = { type: 'INCREMENT' };
```

**Dispatch:** A function used to send actions to the reducer. When an action is dispatched, Redux calls the reducer and updates the state based on the action.
 
```
dispatch(incrementAction);
```

FULL Description and factors about REDUX.

**1. Store**
The store is like a container that holds the entire state (data) of your application. Think of it as a place where all the important information about your app lives.
Example:
```
const store = createStore(reducer);
```
**2. Actions**
Actions are objects that tell Redux what happened and what you want to change. Every action must have a type, which describes the action (like "ADD_ITEM" or "REMOVE_USER").
```
const action = { type: 'ADD_ITEM' };
```
**3. Reducers**
A reducer is a function that takes the current state and an action, and based on that action, decides how to change the state. It tells Redux how the app's data should change when something happens.
Example:
```
const reducer = (state = { count: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return { count: state.count + 1 };
  }
  return state;
};
```
**4. Dispatch**
Dispatch is the way you send an action to the store. It tells Redux, "Hey, this thing just happened!" and Redux will update the state using the reducer.
Example:
```
store.dispatch({ type: 'INCREMENT' });
```
**5. Middleware**
Middleware is like a helper that you add in the middle of the process. It can help with things like making API requests, logging actions, or handling asynchronous tasks. You might use something like redux-thunk for making network requests.
Example (with redux-thunk):
```
const fetchData = () => (dispatch) => {
  fetch('/api')
    .then((res) => res.json())
    .then((data) => dispatch({ type: 'DATA_LOADED', payload: data }));
};
```
**6. Redux Toolkit**
Redux Toolkit makes Redux simpler to use, with fewer repetitive steps. It helps you write less code to do the same tasks.

- [x] Simplified Version:
  
- Store: The place where all the data (state) of your app is stored.
- Actions: Objects that describe what happened and what you want to change.
- Reducers: Functions that say how the data (state) should change when an action happens.
- Dispatch: The way to send an action to Redux so it can update the state.
- Middleware: Tools that help with things like making API calls or logging.
