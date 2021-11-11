import { Pokemon } from "../data/model";

type PokemonSummaryProps = {
  pokemon: Pokemon;
  isCaught: boolean;
  onSelect: (pokemonId: number) => void;
};

const PokemonSummary = ({
  pokemon,
  isCaught,
  onSelect,
}: PokemonSummaryProps) => {
  return (
    <div className="c-pokemon-summary" onClick={() => onSelect(pokemon.id)}>
      <h4>{pokemon.name}</h4>
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      {isCaught && <h4>In your team!</h4>}
    </div>
  );
};

export default PokemonSummary;
