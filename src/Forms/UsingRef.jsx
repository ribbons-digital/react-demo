// Basic Forms
// Finish Basic Form first

import * as React from "react";

function UsernameForm({ onSubmitUsername }) {

  // Accessing the input's value by using useRef hook
  const usernameInputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    
    onSubmitUsername(event.target.elements.usernameInput.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={usernameInputRef} id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function UsingRef() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default UsingRef;
