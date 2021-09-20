// Custom Hook

import * as React from "react";

function useLocalStorageState(key, initialName) {
    const [state, setState] = React.useState(
        () => window.localStorage.getItem(key) || initialName
    );
    React.useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [state]);

    return [state, setState]
}

function Greeting({ initialName = "" }) {
    // What if we'd like to do the same thing in other parts of the app?
    // Create a re-usable hook so you don't need to write the same code again
    // A custom hook is a piece of function that uses/leverages other hooks

    const [name, setName] = useLocalStorageState("name", initialName);


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

function App() {
    return <Greeting />;
}

export default App;
