// useEffect: persistent state
// useEffect dependencies list

// What if a component gets re-rendered not by its local state but by states from its parent component?

import * as React from "react";

function Greeting({ initialName = "" }) {

    console.log('rendering...')

    const [name, setName] = React.useState(
        () => window.localStorage.getItem("name") || initialName
    );

    React.useEffect(() => {
        console.log('Calling useEffect...')
        window.localStorage.setItem("name", name);
    });

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

function HOOKS02_2() {

    return <Greeting />;
}

export default HOOKS02_2;
