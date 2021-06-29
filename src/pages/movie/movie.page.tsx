import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderMovie, Card, CardContainer, SearchOptionsMovie, Footer} from '@/components';
import {uploadSelectedMovieAction} from '@/redux/actions';
import {Store} from '@/types/store.type';
import {Movie} from '@/types/movie.type';

interface SelectedState {
  currentMovie: Movie | null;
  similarMoviesByGenre: Movie[];
}

export const MoviePage: React.FC = (): JSX.Element => {
  const {currentMovie, similarMoviesByGenre} = useSelector<Store, SelectedState>(state => ({
    currentMovie: state.movies.currentMovie,
    similarMoviesByGenre: state.movies.similarMoviesByGenre,
  }));
  const dispatch = useDispatch();

  useEffect((): void => {
    dispatch(uploadSelectedMovieAction());
  }, []);

  return (
    <div className="certain_movie content">
      <HeaderMovie {...currentMovie} />
      <SearchOptionsMovie genres={currentMovie?.genres || []} />
      <CardContainer>
        {similarMoviesByGenre.length &&
          similarMoviesByGenre.map(movie => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={movie.posterPath}
              releaseDate={movie.releaseDate}
              genres={movie.genres}
            />
          ))}
      </CardContainer>
      <Footer />
    </div>
  );
};
