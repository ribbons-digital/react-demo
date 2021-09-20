// useRef and useEffect: DOM interaction

// Sometimes we might need to interact with the DOM node directly (or the library we use does)
// Interacting directly with a DOM node is a "side-effect" so we need to run that interfaction in the useEffect hook
// And we use "useRef" hook to get a reference of the DOM node we are interacting with

import * as React from "react";

import VanillaTilt from "vanilla-tilt";

function Tilt({ children }) {
  const tiltRef = React.useRef();

  React.useEffect(() => {
    const tiltNode = tiltRef.current;
    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });

    return function cleanup() {
      tiltNode.VanillaTilt.destroy();
    };
  }, []);

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  );
}

function HOOKS04() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  );
}

export default HOOKS04;
