import React, {useEffect} from 'react';
import {HeaderMovie, Card, CardContainer, SearchOptionsMovie, Footer} from '@/components';
import {useDispatch, useSelector} from 'react-redux';
import {Store} from '@/types';
import {uploadSelectedMovieAction} from '@/redux/actions';

export const MoviePage: React.FC = (): JSX.Element => {
  const state = useSelector<Store, Store>(state => state);
  const dispatch = useDispatch();

  useEffect((): void => {
    dispatch(uploadSelectedMovieAction());
  }, []);

  return (
    <div className="certain_movie content">
      <HeaderMovie {...state.movies.currentMovie} />
      <SearchOptionsMovie genres={state.movies.currentMovie?.genres || []} />
      <CardContainer>
        {state.movies.similarMoviesByGenre.length &&
          state.movies.similarMoviesByGenre.map(movie => (
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
