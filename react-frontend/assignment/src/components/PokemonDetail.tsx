import { Pokemon } from "../data/model";

type PokemonDetailProps = {
  pokemon: Pokemon;
  isCaught: boolean;
  // onThrowPokeBall: (pokemonId: number) => boolean;
};

const PokemonDetail = (props: PokemonDetailProps) => {
  const { pokemon } = props;

  return (
    <div className="c-pokemon-detail">
      <h4>{pokemon.name}</h4>
      <img
        className="visual"
        alt={pokemon.name}
        src={pokemon.sprites.front_default}
      />
    </div>
  );
};

export default PokemonDetail;
