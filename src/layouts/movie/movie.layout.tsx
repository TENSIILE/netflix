import React from 'react';
import {NextPage, GetServerSideProps} from 'next';
import {HeaderMovie, Card, CardContainer, SearchOptionsMovie, Footer} from '@/components';
import {Movie, MovieData} from '@/types/movie.type';
import {Head} from '@/layouts/head.layout';
import {request} from '@/utils/http.utils';
import {mapMovieDataToMovie, mapMovieDataArrayToMovie} from '@/utils/helpers.util';

interface DataFromServer {
  currentMovie: Movie | null;
  similarMoviesByGenre: Movie[];
}

const MoviePage: NextPage<DataFromServer> = ({currentMovie, similarMoviesByGenre}): JSX.Element => (
  <div className="certain_movie content">
    <Head addedTitle={currentMovie?.title} />
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

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const res = await request<MovieData>(`/movies/${query?.id}`);

  const {data} = await request(`/movies?filter=${res.genres.join(',')}`);
  const movies = data.filter((movie: Movie) => movie.id.toString() !== query.id?.toString());

  return {
    props: {
      currentMovie: mapMovieDataToMovie(res),
      similarMoviesByGenre: mapMovieDataArrayToMovie(movies),
    },
  };
};

export default MoviePage;
