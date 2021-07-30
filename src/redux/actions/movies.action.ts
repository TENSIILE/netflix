import {AnyAction, Dispatch} from 'redux';
import {
  SET_DATA_MOVIES,
  UPLOAD_CACHE_MOVIES,
  INIT_FETCH_MOVIES,
  LOAD_SIMILAR_MOVIES_BY_GENRE,
  LOAD_CURRENT_MOVIE,
} from '@/redux/types/movies.type';
import {Movie, MovieData} from '@/types/movie.type';
import {mapMovieDataArrayToMovie, mapMovieDataToMovie, getURLParams} from '@/utils/helpers.util';
import {request} from '@/utils/http.utils';

const searchMoviesActionCreator = (movies: Movie | Movie[]): AnyAction => ({
  type: SET_DATA_MOVIES,
  payload: movies,
});

const initFetchMoviesActionCreator = (movies: Movie | Movie[]): AnyAction => ({
  type: INIT_FETCH_MOVIES,
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

export const sortMoviesAction = (movies: Movie | Movie[]): AnyAction | void => {
  if (Array.isArray(movies) && movies.length) {
    return {
      type: SET_DATA_MOVIES,
      payload: movies,
    };
  }
};

export const uploadCacheMoviesAction = (): AnyAction => ({
  type: UPLOAD_CACHE_MOVIES,
});

export const searchMoviesAction = (input: string, activeTab: string) => {
  return async (dispatch: Dispatch): Promise<void> => {
    const {data} = await request(`/movies?search=${input}&searchBy=${activeTab}`);
    dispatch(searchMoviesActionCreator(mapMovieDataArrayToMovie(data)));
  };
};

export const initFetchMoviesAction = (activeTab: string) => {
  return async (dispatch: Dispatch): Promise<AnyAction | void> => {
    const search = getURLParams('search');

    if (search) {
      const {data} = await request(`/movies?search=${search}&searchBy=${activeTab}`);
      return dispatch(searchMoviesActionCreator(mapMovieDataArrayToMovie(data)));
    }

    const {data} = await request('/movies?sortBy=vote_average&sortOrder=desc');
    dispatch(initFetchMoviesActionCreator(mapMovieDataArrayToMovie(data)));
  };
};

export const uploadSelectedMovieAction = (id: string | string[] | undefined) => {
  return async (dispatch: Dispatch): Promise<void> => {
    const res = await request<MovieData>(`/movies/${id}`);
    dispatch(loadCurrentMovieAction(mapMovieDataToMovie(res)));

    const {data} = await request(`/movies?filter=${res.genres.join(',')}`);

    const movies = data.filter((movie: Movie) => movie.id.toString() !== id?.toString());
    dispatch(loadSimilarMoviesByGenreAction(mapMovieDataArrayToMovie(movies)));
  };
};
