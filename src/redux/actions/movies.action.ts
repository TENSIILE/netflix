import {AnyAction, Dispatch} from 'redux';
import {
  SEARCH_MOVIES,
  UPLOAD_CACHE_MOVIES,
  INIT_FETCH_MOVIES,
  LOAD_SIMILAR_MOVIES_BY_GENRE,
  LOAD_CURRENT_MOVIE,
} from '@/redux/types/movies.type';
import {Movie} from '@/types/movie.type';
import {renamePropsObj} from '@/utils/helpers.util';
import config from '@/config.json';

const searchMoviesActionCreator = (movies: Movie | Movie[]): AnyAction => ({
  type: SEARCH_MOVIES,
  payload: movies,
});

const loadCurrentMovieAction = (movie: Movie): AnyAction => ({
  type: LOAD_CURRENT_MOVIE,
  payload: movie,
});

const loadSimilarMoviesByGenreAction = (movies: Movie[]): AnyAction => ({
  type: LOAD_SIMILAR_MOVIES_BY_GENRE,
  payload: movies,
});

const initFetchMoviesActionCreator = (movies: Movie | Movie[]): AnyAction => ({
  type: INIT_FETCH_MOVIES,
  payload: movies,
});

export const sortMoviesAction = searchMoviesActionCreator;

export const searchMoviesAction = (input: string, activeTab: string) => {
  return async (dispatch: Dispatch): Promise<void> => {
    const response = await fetch(
      `${config.SERVER_API}/movies?search=${input}&searchBy=${activeTab}`
    );
    const data = await response.json();
    renamePropsObj(data);

    dispatch(searchMoviesActionCreator(data));
  };
};

export const uploadCacheMoviesAction = (): AnyAction => ({
  type: UPLOAD_CACHE_MOVIES,
});

export const initFetchMoviesAction = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    const response = await fetch(`${config.SERVER_API}/movies`);
    const {data} = await response.json();
    renamePropsObj(data);

    dispatch(initFetchMoviesActionCreator(data));
  };
};

export const uploadSelectedMovieAction = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    const url = new URLSearchParams(location.search);
    const id = url.get('id');

    const response = await fetch(`${config.SERVER_API}/movies/${id}`);
    const res = await response.json();

    renamePropsObj(res);
    dispatch(loadCurrentMovieAction(res));

    const response_similar = await fetch(
      `${config.SERVER_API}/movies?filter=${res.genres.join(',')}`
    );
    const res_similar = await response_similar.json();

    renamePropsObj(res_similar.data);
    const movies = res_similar.data.filter(
      (movie: Movie) => movie.id.toString() !== id?.toString()
    );
    dispatch(loadSimilarMoviesByGenreAction(movies));
  };
};
