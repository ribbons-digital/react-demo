// useEffect: HTTP requests
// store the state in an object

import * as React from "react";
import {
    PokemonInfoFallback,
    PokemonForm,
    PokemonDataView
} from "./pokemon";
import { fetchPokemon } from "./PokemonUtils"

function PokemonInfo({ pokemonName }) {
    const [status, setStatus] = React.useState("idle");
    const [pokemon, setPokemon] = React.useState(null);
    const [error, setError] = React.useState(null);

    // 2. Instead we can merge above states in to one state object

    React.useEffect(() => {
        if (!pokemonName) {
            return;
        }
        setStatus("pending");
        fetchPokemon(pokemonName).then(
            (pokemon) => {
                // 1. We always need to make sure functions like below are called in the correct orders which is not ideal
                setPokemon(pokemon);
                setStatus("resolved");

                // 3. Then we just update the state object based on different conditions and we needn't worry about calling multiple setState in correct orders
            },
            (error) => {
                setError(error);
                setStatus("rejected");
            }
        );
    }, [pokemonName]);

    if (status === "idle") {
        return "Submit a pokemon";
    } else if (status === "pending") {
        return <PokemonInfoFallback name={pokemonName} />;
    } else if (status === "rejected") {
        return (
            <div>
                There was an error:{" "}
                <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
            </div>
        );
    } else if (status === "resolved") {
        return <PokemonDataView pokemon={pokemon} />;
    }

    throw new Error("This should be impossible");
}

function Pokemon() {
    const [pokemonName, setPokemonName] = React.useState("");

    function handleSubmit(newPokemonName) {
        setPokemonName(newPokemonName);
    }

    return (
        <div className="pokemon-info-app">
            <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
            <hr />
            <div className="pokemon-info">
                <PokemonInfo pokemonName={pokemonName} />
            </div>
        </div>
    );
}

export default Pokemon;
