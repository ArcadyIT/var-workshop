import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/data/model';

/**
 * Component for displaying an overview of all pokemon
 * received in the pokemon input property.
 */
@Component({
  selector: 'app-pokemon-overview',
  templateUrl: './pokemon-overview.component.html',
  styleUrls: ['./pokemon-overview.component.scss'],
})
export class PokemonOverviewComponent {
  @Input() pokemon: Pokemon[] = [];
  @Input() selectedPokemonIds: number[] = [];

  @Output() pokemonSelected = new EventEmitter<Pokemon>();

  /**
   * Called when a pokemon in the list is clicked, and
   * forwards the selected pokemon as an event to the
   * parent component.
   *
   * @param pokemon The pokemon that has been clicked.
   */
  onPokemonClicked(pokemon: Pokemon) {
    this.pokemonSelected.emit(pokemon);
  }
}
