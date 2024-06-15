import { TestBed } from '@angular/core/testing';

import { PokemonOverviewRes, PokemonService } from './pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { PokemonDetails } from 'src/core/interfaces/pokemon-details.interface';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    });

    service = TestBed.inject(PokemonService);
  });
  it('should fetch pokemon overview list', () => {
    const mockResponse: PokemonOverviewRes = {
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      ],
    };

    service.getPokemonOverviewList(2, 0).subscribe((res) => {
      expect(res).toEqual(mockResponse.results);
    });
  });

  it('should fetch pokemon details', () => {
    const mockResponse: PokemonDetails = {
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

    service.getPokemonDetails('bulbasaur').subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });
  });
});
