// Dynamic Forms
// Finish UsingRef first

import * as React from "react";

function UsernameForm({ onSubmitUsername }) {
  const [error, setError] = React.useState(null)


  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(event.target.elements.usernameInput.value);
  }

  function handleChange(event) {
    
    const { value } = event.target;
    const isLowerCase = value === value.toLowerCase();

    setError(isLowerCase ? null : "Username must be lower case!")

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} />
      </div>
      <div role="alert" style={{ color: "red" }}>
        {error}
      </div>
      <button disabled={error} type="submit">Submit</button>
    </form>
  );
}

function DynamicForm() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default DynamicForm;
