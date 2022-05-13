import { render, screen } from "@testing-library/react";
import App from "./App";
import data from "./data/dataset.json";

describe("App.tsx", () => {
  it("Renders pokemon list", () => {
    render(<App />);
    const pokemon = screen.getByAltText(data.pokemon[0].name);
    expect(pokemon).toBeInTheDocument();
  });
});
