// Controlled Forms
// The end

import * as React from "react";

function UsernameForm({ onSubmitUsername }) {
  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(event.target.elements.usernameInput.value);
  }

  function handleChange(event) {
    const { value } = event.target;
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} value={username} />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

function ControlledForm() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return (
    <div style={{ minWidth: 400 }}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  );
}

export default ControlledForm;
