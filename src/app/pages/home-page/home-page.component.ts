import { Component, inject } from '@angular/core';
import { Pokemon, PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  public pokemons: Pokemon[] = [];

  private pokemonService = inject(PokemonService);

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((pokemonList) => {
      this.pokemons = pokemonList;
      console.log(pokemonList);
    });
  }
}
