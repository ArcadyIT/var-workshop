import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './data/model';
import { PokedexService } from './services/pokedex.service';

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

  ngOnInit() {
    this.pokemon$ = this.pokedexService.getPokemon();
  }

  onPokemonSelectedInList(pokemon: Pokemon) {
    this.selectedPokemonDetail = pokemon;
  }

  onPokemonCaught(pokemon: Pokemon) {
    this.selectedPokemonIds.push(pokemon.id);
  }
}
