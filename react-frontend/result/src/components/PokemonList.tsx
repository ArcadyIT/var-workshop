import { Pokemon } from "../data/model";
import PokemonSummary from "./PokemonSummary";

type PokemonListProps = {
  pokemon: Pokemon[];
  isCaught: (id: number) => boolean;
  onSelect: (pokemonId: number) => void;
};

const PokemonList = (props: PokemonListProps) => {
  const { pokemon, isCaught, onSelect } = props;

  return (
    <div className="list">
      {pokemon.map((pokemon) => (
        <PokemonSummary
          key={pokemon.id}
          onSelect={onSelect}
          pokemon={pokemon}
          isCaught={isCaught(pokemon.id)}
        />
      ))}
    </div>
  );
};

export default PokemonList;
