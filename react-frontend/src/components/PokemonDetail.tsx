import { useState } from "react";
import { Pokemon } from "../data/model";

type PokemonDetailProps = {
  pokemon: Pokemon;
  isCaught: boolean;
  onCatch: (pokemonId: Pokemon["id"]) => void;
  back: () => void;
};
const PokemonDetail = (props: PokemonDetailProps) => {
  const { pokemon, back, onCatch, isCaught } = props;
  const [message, setMessage] = useState<string | undefined>(undefined);

  const onThrowPokeball = () => {
    // some logic to determine if a pokemon get's caught
    onCatch(pokemon.id);
    setMessage(`Wow! You've caught: ${pokemon.name}`);
  };

  return (
    <>
      <h4>{pokemon.name}</h4>
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      <button onClick={back}>Back</button>
      <button disabled={isCaught} onClick={onThrowPokeball}>
        Throw Pokeball
      </button>
      {message && <h4>{message}</h4>}
    </>
  );
};

export default PokemonDetail;
