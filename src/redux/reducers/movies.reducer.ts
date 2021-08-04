import {AnyAction} from 'redux';
import {Movie} from '@/types/movie.type';
import {SET_DATA_MOVIES, UPLOAD_CACHE_MOVIES, INIT_FETCH_MOVIES} from '@/redux/types/movies.type';

const initialState = {
  movies: [],
  cacheMovies: [],
};

interface MoviesState {
  movies: Movie[];
  cacheMovies: Movie[];
}

export const moviesReducer = (
  state: MoviesState = initialState,
  action: AnyAction
): MoviesState => {
  switch (action.type) {
    case INIT_FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        cacheMovies: action.payload,
      };
    case SET_DATA_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case UPLOAD_CACHE_MOVIES:
      return {
        ...state,
        movies: state.cacheMovies,
      };
    default:
      return state;
  }
};
