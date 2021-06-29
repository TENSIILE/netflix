import {Movie} from './movie.type';
import {Tab} from '.';

export interface Store {
  inputs: {
    input: string;
  };
  movies: MoviesStore;
  tabs: TabsStore;
}

export interface MoviesStore {
  movies: Movie[];
  cacheMovies: Movie[];
  currentMovie: Movie | null;
  similarMoviesByGenre: Movie[];
}

export interface TabsStore {
  tabs: Tab[];
  sortTabs: Tab[];
}
