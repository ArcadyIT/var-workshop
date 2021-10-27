import { DataSet } from "../data/model";
import { default as pokemonData } from "../data/dataset.json";
import { useState } from "react";

const usePokemon = () => {
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
  const [{ pokemon }] = useState<DataSet>(pokemonData);

  const onSelect = (pokemonId?: number | undefined) => {
    setSelectedId(pokemonId);
  };

  const selectedPokemon = pokemon.find((p) => p.id === selectedId);

  return { pokemon, selectedPokemon, onSelect };
};

export default usePokemon;
