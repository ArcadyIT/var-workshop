import { useState } from "react";
import { DataSet, Pokemon } from "./data/model";
import { default as pokemonData } from "./data/dataset.json";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

const App = () => {
  const [selectedId, setSelectedId] = useState<Pokemon["id"] | undefined>(
    undefined
  );
  const [caughtPokemonIds, setCaughtPokemonIds] = useState<Pokemon["id"][]>([]);

  const [{ pokemon }] = useState<DataSet>(pokemonData);

  const onSelect = (pokemonId?: Pokemon["id"]) => {
    setSelectedId(pokemonId);
  };

  const onCatch = (pokemonId: Pokemon["id"]) => {
    setCaughtPokemonIds([...caughtPokemonIds, pokemonId]);
  };

  const selectedPokemon = pokemon.find((p) => p.id === selectedId);

  if (selectedPokemon) {
    return (
      <PokemonDetail
        onCatch={onCatch}
        pokemon={selectedPokemon}
        back={() => onSelect(undefined)}
        isCaught={caughtPokemonIds.includes(selectedPokemon.id)}
      />
    );
  }

  return (
    <PokemonList
      caughtPokemonIds={caughtPokemonIds}
      onSelect={onSelect}
      pokemon={pokemon}
    />
  );
};

export default App;
