// useState: greeting

import * as React from "react";

// 1. We want to get the value from the input field
// 2. And update the "name" variable which is used to display the name below the input field

function Greeting() {

  const [name, setName] = React.useState("");

  function handleChange(event) {
    // update the name here based on event.target.value
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

function Hooks01() {
  return <Greeting />;
}

export default Hooks01;
