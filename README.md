**Reducer:** A pure function that takes the current state and an action as arguments and returns a new state. It defines how the state should change in response to actions.

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

