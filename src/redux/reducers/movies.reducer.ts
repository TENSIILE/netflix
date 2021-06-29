import {AnyAction} from 'redux';
import {Movie} from '@/types/movie.type';
import {
  SEARCH_MOVIES,
  UPLOAD_CACHE_MOVIES,
  INIT_FETCH_MOVIES,
  LOAD_CURRENT_MOVIE,
  LOAD_SIMILAR_MOVIES_BY_GENRE,
} from '@/redux/types/movies.type';

const initialState = {
  movies: [],
  cacheMovies: [],
  currentMovie: null,
  similarMoviesByGenre: [],
};

interface MoviesState {
  movies: Movie[];
  cacheMovies: Movie[];
  currentMovie: Movie | null;
  similarMoviesByGenre: Movie[];
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
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case UPLOAD_CACHE_MOVIES:
      return {
        ...state,
        movies: state.cacheMovies,
      };
    case LOAD_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
      };
    case LOAD_SIMILAR_MOVIES_BY_GENRE:
      return {
        ...state,
        similarMoviesByGenre: action.payload,
      };
    default:
      return state;
  }
};
