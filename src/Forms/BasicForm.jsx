// Basic Forms
// Start here

import * as React from "react";

function UsernameForm({ onSubmitUsername }) {
  // By default when you click on submit button, the input field is cleared up and the whole page is refreshed
  // It also actually tries to make a HTTP POST request with the value from the input field as the param
  // We don't want to have this default behaviour as we are creating a single page app

  // 1. Create a function that accepts the "event" argument
  // 2. Use the function on the form's "onSubmit" handler
  function handleSubmit(event) {
    event.preventDefault();

    // This checks the DOM node
    console.log(event.target[0].value)

    // This checks the property on the DOM node which is what we are looking for
    console.dir(event.target);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function BasicForm() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default BasicForm;
