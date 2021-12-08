import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './data/model';
import { PokedexService } from './services/pokedex.service';

/**
 * Main component in the application. It renders both the
 * pokemon overview as well as the pokemon detail view.
 * The pokedex data set is fetched from the PokedexService.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public pokemon$: Observable<Pokemon[]> | undefined;
  public selectedPokemonIds: number[] = [];
  public selectedPokemonDetail: Pokemon | undefined;

  constructor(private pokedexService: PokedexService) {}

  /**
   * When the component is initialized, fetch the pokedex data.
   */
  ngOnInit() {
    this.pokemon$ = this.pokedexService.getPokemon();
  }

  /**
   * Called when a pokemon is selected in the overview list, and
   * store the pokemon in the selectedPokemonDetail so the detail
   * view can be shown.
   *
   * @param pokemon The selected pokemon.
   */
  onPokemonSelectedInList(pokemon: Pokemon) {
    this.selectedPokemonDetail = pokemon;
  }

  /**
   * Called when a pokemon is caught in the pokemon detail view.
   * Adds the pokemon ID to the selectedPokemonIds array.
   *
   * Note: For learning purposes, this function contains a check
   *       to fail catching the pokemon when the minutes are uneven.
   *
   * @param pokemon The caught pokemon.
   */
  onPokemonCaught(pokemon: Pokemon) {
    // TODO: Check if new Date.getMinutes() is even
    //       - if even -> console log and return
    //       - if uneven -> add pokemon ID to selectedPokemonIds
  }
}
