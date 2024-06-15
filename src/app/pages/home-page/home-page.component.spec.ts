import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import {
  PokemonOverview,
  PokemonService,
} from 'src/app/services/pokemon.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonDetails } from 'src/core/interfaces/pokemon-details.interface';

describe('HomePageComponent', () => {
  let fixture: ComponentFixture<HomePageComponent>;
  let component: HomePageComponent;
  let pokemonServiceSpy: jasmine.SpyObj<PokemonService>;

  beforeEach(async () => {
    pokemonServiceSpy = jasmine.createSpyObj('PokemonService', [
      'getPokemonOverviewList',
      'getPokemonDetails',
    ]);

    pokemonServiceSpy.getPokemonOverviewList.and.returnValue(of([]));
    pokemonServiceSpy.getPokemonDetails.and.returnValue(of());

    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: PokemonService, useValue: pokemonServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPokemonOverviewList on init', () => {
    component.ngOnInit();
    expect(pokemonServiceSpy.getPokemonOverviewList).toHaveBeenCalled();
  });

  it('Array of pokemons should have 2 length', () => {
    pokemonServiceSpy.getPokemonOverviewList.and.returnValue(
      of([
        { name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
        { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      ])
    );

    component.ngOnInit();

    component.pokemonsOverviewList$.subscribe((pokemons: PokemonOverview[]) => {
      expect(pokemons.length).toBe(2);
    });
  });

  it('should call printPokemon', () => {
    spyOn(component, 'printPokemon');
    component.ngOnInit();
    expect(component.printPokemon).toHaveBeenCalled();
  });

  it('should print pokemons', () => {
    pokemonServiceSpy.getPokemonOverviewList.and.returnValue(
      of([
        { name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
        { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      ])
    );

    component.ngOnInit();

    spyOn(console, 'log');
    component.printPokemon();
    expect(console.log).toHaveBeenCalledWith([
      { name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
      { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    ]);
  });

  it('should call getPokemonDetails', () => {
    spyOn(component, 'getPokemonDetails');
    component.getPokemonDetails('pikachu');
    expect(component.getPokemonDetails).toHaveBeenCalled();
  });

  it('should get pokemon details', () => {
    const pokemonName = 'pikachu';

    const pokemonDetails: PokemonDetails = {
      abilities: [],
      baseExperience: 0,
      cries: {
        latest: '',
        legacy: '',
      },
      forms: [],
      gameIndices: [],
      height: 0,
      heldItems: [],
      id: 0,
      isDefault: false,
      locationAreaEncounters: '',
      moves: [],
      name: '',
      order: 0,
      pastAbilities: [],
      pastTypes: [],
      species: {
        name: '',
        url: '',
      },
      sprites: {
        backDefault: '',
        backFemale: null,
        backShiny: '',
        backShinyFemale: null,
        frontDefault: '',
        frontFemale: null,
        frontShiny: '',
        frontShinyFemale: null,
      },
      stats: [],
      types: [],
      weight: 0,
    };

    pokemonServiceSpy.getPokemonDetails.and.returnValue(of(pokemonDetails));

    component.getPokemonDetails(pokemonName);

    expect(pokemonServiceSpy.getPokemonDetails).toHaveBeenCalledWith(pokemonName);
    expect(component.pokemonDetails).toEqual(pokemonDetails);
  });
});
