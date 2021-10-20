import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/data/model';

@Component({
  selector: 'app-pokemon-overview',
  templateUrl: './pokemon-overview.component.html',
  styleUrls: ['./pokemon-overview.component.scss'],
})
export class PokemonOverviewComponent {
  @Input() pokemon: Pokemon[] = [];

  @Output() onPokemonSelected = new EventEmitter<Pokemon>();

  onPokemonClicked(pokemon: Pokemon) {
    this.onPokemonSelected.emit(pokemon);
  }
}
