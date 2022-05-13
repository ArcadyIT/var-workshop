import { Pokemon } from "../data/model";

type PokemonListProps = {
  pokemon: Pokemon[];
  isCaught: (id: number) => boolean;
  onSelect: (pokemonId: number) => void;
};

const PokemonList = (props: PokemonListProps) => {
  return <div className="list"></div>;
};

export default PokemonList;
