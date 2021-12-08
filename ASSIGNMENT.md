## Removed from Vue Application

PokemonListContext

    - Removed OnThrowPokeBall function
    - Removed passing the Pokemon from the DataSet to the PokemonListComponent prop

PokemonList

    - Removed PokemonSummary component loop

PokemonDetail

    - Removed defining of Emits (kept the import as hint)
    - Removed click 'throw Poke Ball'

## Removed from Angular Application

app.component.ts
    - Removed onPokemonCaught implementation

app.component.html
    - Removed list/detail view rendering

pokemon-overview.component.html
    - Removed view implementation (ngfor/ngif)

pokemon-detail.component.ts
    - Removed onCatchButtonClicked for output event

app-component.spec.ts
    - Removed some unit test steps to fill in