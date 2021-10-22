import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DataSet, Pokemon } from '../data/model';
import * as json from '../data/dataset.json';

/**
 * Service for interacting with the Pokedex API.
 *
 * For this test application, it's using a mock dataset,
 * but in a real application the Angular HttpClient would
 * be used to make an API call.
 */
@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor() {}

  /**
   * Get all available pokemon from the Pokedex API.
   *
   * @returns An Observable list of pokemon.
   */
  getPokemon(): Observable<Pokemon[]> {
    // In a real application, this service would call an API using
    // the Angular HttpClient.
    const pokemon = json as DataSet;
    return of(pokemon.pokemon).pipe(delay(1000));
  }
}
