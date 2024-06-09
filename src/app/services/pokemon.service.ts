import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface PokemonResponse {
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);

  constructor() {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http
      .get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon')
      .pipe(
        map((response) => {
          return response.results;
        })
      );
  }
}
