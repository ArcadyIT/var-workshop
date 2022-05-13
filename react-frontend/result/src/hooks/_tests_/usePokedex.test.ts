import { renderHook, act } from "@testing-library/react-hooks";
import usePokedex from "../usePokedex";

const pokemonId = 3;

describe("use pokedex", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("allows catching of the pokemon when conditions are met", () => {
    const { result } = renderHook(() => usePokedex());

    expect(result.current.caughtPokemonIds.length).toBe(0);

    // Throw pokeball at an uneven minute, pokemon should not be caught
    jest.setSystemTime(new Date(2021, 4, 10, 12, 1));
    act(() => {
      result.current.onThrowPokeBall(pokemonId);
    });
    expect(result.current.caughtPokemonIds.includes(pokemonId)).toBe(false);

    // Try again at even minute, expect pokemon to be cauth
    jest.setSystemTime(new Date(2021, 4, 10, 12, 2));
    act(() => {
      result.current.onThrowPokeBall(pokemonId);
    });
    expect(result.current.caughtPokemonIds.includes(pokemonId)).toBe(true);
  });
});
