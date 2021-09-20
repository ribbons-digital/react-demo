// useEffect: persistent state

// Sometimes we want to load the form with values store somewhere else instead of local state
// Or we would like to save the values from the form and persist it throughout the app and use them somewhere else
// Easiest way is to use localStorage with state
// useEffect hook is what you use for any async tasks (including using localStorage)

import * as React from "react";

function Greeting({ initialName = "" }) {
    const [name, setName] = React.useState(window.localStorage.getItem("itemName") || initialName);

    React.useEffect(() => {
        window.localStorage.setItem("itemName", name)
    })

    function handleChange(event) {
        setName(event.target.value);
    }
    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={handleChange} id="name" />
            </form>
            {name ? <strong>Hello {name}</strong> : "Please type your name"}
        </div>
    );
}

function HOOKS02() {
    return <Greeting />;
}

export default HOOKS02;
