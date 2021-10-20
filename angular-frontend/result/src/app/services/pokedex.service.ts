import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DataSet, Pokemon } from '../data/model';
import * as json from '../data/dataset.json';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor() {}

  getPokemon(): Observable<Pokemon[]> {
    // In a real application, this service would call an API using
    // the Angular HttpClient.
    const pokemon = json as DataSet;
    return of(pokemon.pokemon).pipe(delay(1000));
  }
}
