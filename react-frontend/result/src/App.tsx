import usePokemon from "./hooks/usePokemon";
import usePokedex from "./hooks/usePokedex";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

const App = () => {
  const { pokemon, selectedPokemon, onSelect } = usePokemon();
  const { isCaught, onThrowPokeBall } = usePokedex();

  return (
    <div className="c-pokemon-list">
      <PokemonList isCaught={isCaught} onSelect={onSelect} pokemon={pokemon} />
      {selectedPokemon && (
        <div className="detail">
          <PokemonDetail
            onThrowPokeBall={onThrowPokeBall}
            pokemon={selectedPokemon}
            isCaught={isCaught(selectedPokemon.id)}
          />
        </div>
      )}
    </div>
  );
};

export default App;
