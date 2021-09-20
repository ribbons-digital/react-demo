// useReducer: simple Counter
// accept the step as the action

import * as React from "react";

const countReducer = (count, change) => count + change;

function Counter({ initialCount = 0, step = 1 }) {
  const [count, changeCount] = React.useReducer(countReducer, initialCount);
  const increment = () => changeCount(step);
  return <button onClick={increment}>{count}</button>;
}

function ReducerCounter() {
  return <Counter />;
}

export default ReducerCounter;
