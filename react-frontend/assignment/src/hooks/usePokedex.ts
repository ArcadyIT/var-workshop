import { useState } from "react";

const usePokedex = () => {
  const caughtPokemonIds: number[] = [];

  const isCaught = (id: number) => caughtPokemonIds.includes(id);

  return { caughtPokemonIds, isCaught };
};

export default usePokedex;
