export type Categories = 'Any' | 'Misc' | 'Programming' | 'Dark' | 'Pun' | 'Spooky' | 'Christmas';

export type Flags = {
  'nsfw': boolean;
  'religious': boolean;
  'political': boolean;
  'racist': boolean;
  'sexist': boolean;
  'explicit': boolean
}

export type FlagKeys =
  | "explicit"
  | "nsfw"
  | "political"
  | "racist"
  | "sexist"
  | "religious";


export type Joke = {
  category: Categories;
  id: number;
  lang: 'cs' | 'de' | 'en' | 'es' | 'fr' | 'pt';
  safe: boolean;
  setup?: string;
  delivery?: string;
  joke?: string;
  type: 'single' | 'twopart';
  flags: Flags,
};
