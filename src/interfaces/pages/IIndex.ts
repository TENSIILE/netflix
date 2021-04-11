import {ITab} from '../components';
import {IMovie} from '../pages';

export interface IIndexState {
  input: string;
  movies: IMovie[];
  cache_movies: IMovie[];
  tabs: ITab[];
  sortTabs: ITab[];
}
