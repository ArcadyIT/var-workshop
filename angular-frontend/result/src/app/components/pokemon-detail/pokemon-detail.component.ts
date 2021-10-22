import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/data/model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent {
  @Input() selectedPokemon: Pokemon | undefined;
  @Input() selectedPokemonIds: number[] = [];

  @Output() pokemonCaught = new EventEmitter<Pokemon>();

  onCatchButtonClicked() {
    this.pokemonCaught.emit(this.selectedPokemon);
  }
}
