import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  public pokemons$!: Observable<Pokemon[]>;
  // public pokemons: Pokemon[] = [];

  private pokemonService = inject(PokemonService);

  ngOnInit() {
    // this.pokemonService.getPokemonList().subscribe((pokemonList) => {
    //   this.pokemons = pokemonList;
    //   console.log(pokemonList);
    // });
    this.pokemons$ = this.pokemonService.getPokemonList();

    this.printPokemon();
  }

  public printPokemon(){
    this.pokemons$.subscribe((pokemonList) => {
      console.log(pokemonList);
    });
  }



}
