// useState: greeting
// accept an initialName

// 1. What if we want to set an initial value to the name state variable from a prop that's being passed from a parent component
// 2. Do pay attention that the Greeting component is accepting a prop and the "from uncontrolled input to controlled input" error when this prop is not being passed in
// 3. If the prop is not passed in, the "name" state variable becomes null which causes above error
// 4. Best way to avoid it is to have a default value defined for the initialName prop in the Greeting component

import * as React from "react";

function Greeting({ initialName = "" }) {
    const [name, setName] = React.useState(initialName);


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

function HOOKS01_1() {
    return <Greeting />;
}

export default HOOKS01_1;
