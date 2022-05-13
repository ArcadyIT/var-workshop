import { useState } from "react";

const usePokedex = () => {
  const [caughtPokemonIds, setCaughtPokemonIds] = useState<number[]>([]);

  const onThrowPokeBall = (pokemonId: number) => {
    let minutes = new Date().getMinutes();
    if (minutes % 2 === 0) {
      setCaughtPokemonIds([...caughtPokemonIds, pokemonId]);
      return true;
    }
    return false;
  };

  const isCaught = (id: number) => caughtPokemonIds.includes(id);

  return { onThrowPokeBall, caughtPokemonIds, isCaught };
};

export default usePokedex;
