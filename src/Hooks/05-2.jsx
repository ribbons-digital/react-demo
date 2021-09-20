// useEffect: HTTP requests
// Use a Status

import * as React from "react";
import {
    PokemonInfoFallback,
    PokemonForm,
    PokemonDataView
} from "./pokemon";
import { fetchPokemon } from "./PokemonUtils"

function PokemonInfo({ pokemonName }) {
    const [pokemon, setPokemon] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        if (!pokemonName) {
            return;
        }

        // We need to remember to reset the state so the UI can display the next state correctly.
        // But it isn't obvious right away when looking at these 2 lines of codes
        setPokemon(null);
        setError(null);

        fetchPokemon(pokemonName).then(
            (pokemon) => setPokemon(pokemon),
            (error) => setError(error)
        );
    }, [pokemonName]);

    if (error) {
        return (
            <div role="alert">
                There was an error:{" "}
                <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
            </div>
        );
    } else if (!pokemonName) {
        return "Submit a pokemon";
    } else if (!pokemon) {
        return <PokemonInfoFallback name={pokemonName} />;
    } else {
        return <PokemonDataView pokemon={pokemon} />;
    }
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
