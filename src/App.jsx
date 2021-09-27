import React from "react";

import "./App.css";
// import CounterApp from "./Hooks/07.jsx";
// import Provider from "./Hooks/08";
import ToggleApp from "./Hooks/09";

function App() {
  return (
    <React.Fragment>
      {/* <CounterApp /> */}
      {/* <Provider>
        {([state, setState]) => (
          <>
            <div>{state}</div>
            <button onClick={() => setState(state + 1)}>Increment</button>
          </>
        )}
      </Provider> */}

      <ToggleApp />
    </React.Fragment>
  );
}

export default App;
