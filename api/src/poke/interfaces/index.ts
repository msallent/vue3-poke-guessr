export type Generation = 'i' | 'ii' | 'iii' | 'all';

export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: Array<Pokemon>;
}

export interface Pokemon {
  name: string;
  url: string;
}
