import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { PokemonService } from 'src/app/services/pokemon.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomePageComponent', () => {
  let fixture: ComponentFixture<HomePageComponent>;
  let component: HomePageComponent;
  let pokemonServiceSpy: jasmine.SpyObj<PokemonService>;

  beforeEach(async () => {
    pokemonServiceSpy = jasmine.createSpyObj('PokemonService', [
      'getPokemonList',
    ]);

    pokemonServiceSpy.getPokemonList.and.returnValue(of([]));

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

  it('should call getPokemonList on init', () => {
    component.ngOnInit();
    expect(pokemonServiceSpy.getPokemonList).toHaveBeenCalled();
  });

  it('Array of pokemons should have 2 length', () => {
    
    pokemonServiceSpy.getPokemonList.and.returnValue(
      of([
        { name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
        { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      ])
    );
    
    component.ngOnInit();

    expect(component.pokemons.length).toBe(2);
  });
});
