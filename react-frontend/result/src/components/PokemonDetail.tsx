import { Pokemon } from "../data/model";

type PokemonDetailProps = {
  pokemon: Pokemon;
  isCaught: boolean;
  onThrowPokeBall: (pokemonId: number) => boolean;
};

const PokemonDetail = (props: PokemonDetailProps) => {
  const { pokemon, onThrowPokeBall, isCaught } = props;

  return (
    <div className="c-pokemon-detail">
      <h4>{pokemon.name}</h4>
      <img
        className="visual"
        alt={pokemon.name}
        src={pokemon.sprites.front_default}
      />

      <button disabled={isCaught} onClick={() => onThrowPokeBall(pokemon.id)}>
        Throw Poke Ball
      </button>
    </div>
  );
};

export default PokemonDetail;
