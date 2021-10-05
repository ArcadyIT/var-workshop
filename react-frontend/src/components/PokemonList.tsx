import { Pokemon } from "../data/model";
import PokemonSummary from "./PokemonSummary";

type PokemonListProps = {
  pokemon: Pokemon[];
  caughtPokemonIds: Pokemon["id"][];
  onSelect: (pokemonId: Pokemon["id"]) => void;
};

const PokemonList = (props: PokemonListProps) => {
  const { pokemon, caughtPokemonIds, onSelect } = props;

  return (
    <div>
      {pokemon.map((pokemon) => (
        <PokemonSummary
          select={onSelect}
          pokemon={pokemon}
          isCaught={caughtPokemonIds.includes(pokemon.id)}
        />
      ))}
    </div>
  );
};

export default PokemonList;
