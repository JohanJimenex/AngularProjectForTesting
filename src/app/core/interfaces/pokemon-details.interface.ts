export interface PokemonDetails {
  abilities: Ability[];
  baseExperience: number;
  cries: Cries;
  forms: Species[];
  gameIndices: GameIndex[];
  height: number;
  heldItems: HeldItem[];
  id: number;
  isDefault: boolean;
  locationAreaEncounters: string;
  moves: Move[];
  name: string;
  order: number;
  pastAbilities: any[];
  pastTypes: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Ability {
  ability: Species;
  isHidden: boolean;
  slot: number;
}

interface Species {
  name: string;
  url: string;
}

interface Cries {
  latest: string;
  legacy: string;
}

interface GameIndex {
  gameIndex: number;
  version: Species;
}

interface HeldItem {
  item: Species;
  versionDetails: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: Species;
}

interface Move {
  move: Species;
  versionGroupDetails: VersionGroupDetail[];
}

interface VersionGroupDetail {
  levelLearnedAt: number;
  moveLearnMethod: Species;
  versionGroup: Species;
}

interface GenerationV {
  blackWhite: Sprites;
}

interface GenerationIv {
  diamondPearl: Sprites;
  heartgoldSoulsilver: Sprites;
  platinum: Sprites;
}

interface Versions {
  generationI: GenerationI;
  generationIi: GenerationIi;
  generationIii: GenerationIii;
  generationIv: GenerationIv;
  generationV: GenerationV;
  generationVi: { [key: string]: Home };
  generationVii: GenerationVii;
  generationViii: GenerationViii;
}

interface Other {
  dreamWorld: DreamWorld;
  home: Home;
  officialArtwork: OfficialArtwork;
  showdown: Sprites;
}

interface Sprites {
  backDefault: string;
  backFemale: null;
  backShiny: string;
  backShinyFemale: null;
  frontDefault: string;
  frontFemale: null;
  frontShiny: string;
  frontShinyFemale: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

interface GenerationI {
  redBlue: RedBlue;
  yellow: RedBlue;
}

interface RedBlue {
  backDefault: string;
  backGray: string;
  backTransparent: string;
  frontDefault: string;
  frontGray: string;
  frontTransparent: string;
}

interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

interface Crystal {
  backDefault: string;
  backShiny: string;
  backShinyTransparent: string;
  backTransparent: string;
  frontDefault: string;
  frontShiny: string;
  frontShinyTransparent: string;
  frontTransparent: string;
}

interface Gold {
  backDefault: string;
  backShiny: string;
  frontDefault: string;
  frontShiny: string;
  frontTransparent?: string;
}

interface GenerationIii {
  emerald: OfficialArtwork;
  fireredLeafgreen: Gold;
  rubySapphire: Gold;
}

interface OfficialArtwork {
  frontDefault: string;
  frontShiny: string;
}

interface Home {
  frontDefault: string;
  frontFemale: null;
  frontShiny: string;
  frontShinyFemale: null;
}

interface GenerationVii {
  icons: DreamWorld;
  ultraSunUltraMoon: Home;
}

interface DreamWorld {
  frontDefault: string;
  frontFemale: null;
}

interface GenerationViii {
  icons: DreamWorld;
}

interface Stat {
  baseStat: number;
  effort: number;
  stat: Species;
}

interface Type {
  slot: number;
  type: Species;
}
