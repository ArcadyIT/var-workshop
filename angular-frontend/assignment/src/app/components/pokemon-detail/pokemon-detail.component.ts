import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/data/model';

/**
 * Component for displaying the details of a pokemon.
 */
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent {
  @Input() selectedPokemon: Pokemon | undefined;
  @Input() selectedPokemonIds: number[] = [];

  /**
   * Called when the Catch-button is clicked, and
   * forwards the currently selected pokemon as an
   * event to the parent component.
   */
  onCatchButtonClicked() {
    // TODO: Emit a new output event when the catch button was clicked
  }
}
