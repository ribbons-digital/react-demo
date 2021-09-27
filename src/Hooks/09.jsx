// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from "react";
import { Switch } from "../components/Switch";

const ToggleContext = React.createContext();

function Toggle({ children }) {
  const [on, setOn] = React.useState(false);
  // console.log(state);
  const jiggle = () => setOn(!on);

  // 💰 React.Children.map(props.children, child => {/* return child clone here */})
  // 📜 https://reactjs.org/docs/react-api.html#reactchildren
  // 📜 https://reactjs.org/docs/react-api.html#cloneelement
  return (
    <ToggleContext.Provider value={{ on, jiggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

function useToggle() {
  return React.useContext(ToggleContext);
}

// 🐨 Flesh out each of these components

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = ({ children }) => {
  const { on } = useToggle();
  return on ? children : null;
};

// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = ({ children }) => {
  const { on } = useToggle();
  return on ? null : children;
};

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = ({ ...props }) => {
  const { on, jiggle } = useToggle();
  return <Switch on={on} onClick={jiggle} />;
};

function ToggleApp() {
  return (
    <div>
      <Toggle>
        <ToggleButton />
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
      </Toggle>
    </div>
  );
}

export default ToggleApp;
