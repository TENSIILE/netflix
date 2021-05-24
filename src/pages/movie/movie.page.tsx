import React, {useState, useEffect} from 'react';
import {HeaderMovie, Card, CardContainer, SearchOptionsMovie, Footer} from '@/components';
import {Movie} from '@/types/movie.type';
import {renamePropsObj} from '@/utils/helpers.util';
import config from '@/config.json';

interface MovieState {
  currentMovie: Movie | null;
  similarMoviesByGenre: Movie[];
}

export const MoviePage: React.FC = (): JSX.Element => {
  const [state, setState] = useState<MovieState>({
    currentMovie: null,
    similarMoviesByGenre: [],
  });

  useEffect((): void => {
    const url = new URLSearchParams(location.search);
    const id = url.get('id');

    fetch(`${config.SERVER_API}/movies/${id}`)
      .then(res => res.json())
      .then(res => {
        renamePropsObj(res);
        setState(prev => ({...prev, currentMovie: res}));

        fetch(`${config.SERVER_API}/movies?filter=${res.genres.join(',')}`)
          .then(res => res.json())
          .then(res => {
            renamePropsObj(res.data);
            const movies = res.data.filter(
              (movie: Movie) => movie.id.toString() !== id?.toString()
            );
            setState(prev => ({...prev, similarMoviesByGenre: movies}));
          });
      });
  }, []);

  return (
    <div className="certain_movie content">
      <HeaderMovie {...state.currentMovie} />
      <SearchOptionsMovie genres={state.currentMovie?.genres || []} />
      <CardContainer>
        {state.similarMoviesByGenre.length &&
          state.similarMoviesByGenre.map(movie => (
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
