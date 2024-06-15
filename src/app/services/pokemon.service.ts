import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokemonDetails } from 'src/core/interfaces/pokemon-details.interface';

export interface PokemonOverviewRes {
  results: PokemonOverview[];
}

export interface PokemonOverview {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);

  constructor() {}

  public getPokemonOverviewList(
    limit: number = 10,
    offset: number = 10
  ): Observable<PokemonOverview[]> {
    return this.http
      .get<PokemonOverviewRes>(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      )
      .pipe(
        map((response) => {
          return response.results;
        })
      );
  }

  public getPokemonDetails(pokemonName: string): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
