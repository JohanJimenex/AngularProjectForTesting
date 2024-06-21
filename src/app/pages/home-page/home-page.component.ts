import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetails } from 'src/app/core/interfaces/pokemon-details.interface';
import { MicrosfEntraIdService } from 'src/app/services/microsf-entra-id.service';
import {
  PokemonOverview,
  PokemonService,
} from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  public pokemonsOverviewList$!: Observable<PokemonOverview[]>;
  public pokemonDetails!: PokemonDetails;

  private pokemonService = inject(PokemonService);
  private microsoftEntraIdService = inject(MicrosfEntraIdService);

  ngOnInit(): void {
    this.pokemonsOverviewList$ = this.pokemonService.getPokemonOverviewList();

    this.printPokemon();
  }

  public getPokemonDetails(pokemonName: string): void {
    this.pokemonService.getPokemonDetails(pokemonName).subscribe((repsonse) => {
      this.pokemonDetails = repsonse;
    });
  }

  public printPokemon(): void {
    this.pokemonsOverviewList$.subscribe((pokemons: PokemonOverview[]) => {
      console.log(pokemons);
    });
  }


  public getAuthInf(): void {
    this.microsoftEntraIdService.getTestMicrosoftActiveD().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
