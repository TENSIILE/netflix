import {Movie} from './movie.type';

export type TabsType = 'tabs' | 'sortTabs';

export interface Tab {
  readonly id: string | number;
  title: string;
  isSelect: boolean;
}

export interface Store {
  inputs: {
    input: string;
  };
  movies: {
    movies: Movie[];
    cacheMovies: Movie[];
    currentMovie: Movie | null;
    similarMoviesByGenre: Movie[];
  };
  tabs: {
    tabs: Tab[];
    sortTabs: Tab[];
  };
}
