// useEffect: HTTP requests

// Import statements
import * as React from "react";
// you'll want the following additional things from './pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the component we show while we're loading the pokemon info
// PokemonDataView: the component we use to display the pokemon info
import { PokemonForm, PokemonInfoFallback, PokemonDataView } from "./pokemon";
import { fetchPokemon } from "./PokemonUtils";

// PokemonInfo Component
function PokemonInfo({ pokemonName }) {
  // - Have state for the pokemon (null)
  const [pokemon, setPokemon] = React.useState(null);

  // UseEffect for HTTP request - 2. Then we work on the side effect that affects the UI
  // - use React.useEffect where the callback should be called whenever the
  // pokemon name changes.
  // !! DON'T FORGET THE DEPENDENCIES ARRAY!
  // - if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
  // - before calling `fetchPokemon`, clear the current pokemon state by setting it to null
  // - Use the `fetchPokemon` function to fetch a pokemon by its name:

  React.useEffect(() => {
    fetchPokemon(pokemonName).then((pokemon) => setPokemon(pokemon));
  }, [pokemonName]);

  // UI - 1. We normally want to finish the UI first, including which condition determines which part of the UI gets rendered
  // - return the following things based on the `pokemon` state and `pokemonName` prop:
  //   1. no pokemonName: 'Submit a pokemon'
  //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
  //   3. pokemon: <PokemonDataView pokemon={pokemon} />

  if (!pokemonName) {
    return "Submit a pokemon";
  } else if (!pokemon) {
    return <PokemonInfoFallback name={pokemonName} />;
  } else {
    return <PokemonDataView pokemon={pokemon} />;
  }
}

// Pokemon Component
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

// exporting Pokemon Component
export default Pokemon;
