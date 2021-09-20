// useEffect: persistent state
// lazy state initialization

import * as React from "react";

function Greeting({ initialName = "" }) {
    console.log("render");


    // Putting computational expensive tasks (async tasks) into a function so it doesn't get called everytime the component is re-rendered
    const [name, setName] = React.useState(
        () => window.localStorage.getItem("name")  || initialName
    );

    React.useEffect(() => {
        console.log("hello")
        window.localStorage.setItem("name", name);
    }, [name]);

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

function HOOKS02_1() {
    return <Greeting />;
}

export default HOOKS02_1;
