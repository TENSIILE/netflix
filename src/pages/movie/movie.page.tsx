import React, {Component} from 'react';
import {HeaderMovie, Card, CardContainer, SearchOptionsMovie, Footer} from '@/components';
import {Movie} from '@/types/movie.type';
import {renamePropsObj} from '@/utils/helpers.util';
import config from '@/config.json';

interface MovieState {
  currentMovie: Movie | null;
  similarMoviesByGenre: Movie[];
}

export class MoviePage extends Component<unknown, MovieState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      currentMovie: null,
      similarMoviesByGenre: [],
    };
  }

  componentDidMount(): void {
    const url = new URLSearchParams(location.search);
    const id = url.get('id');

    fetch(`${config.SERVER_API}/movies/${id}`)
      .then(res => res.json())
      .then(res => {
        renamePropsObj(res);
        this.setState(prev => ({...prev, currentMovie: res}));

        fetch(`${config.SERVER_API}/movies?filter=${res.genres.join(',')}`)
          .then(res => res.json())
          .then(res => {
            renamePropsObj(res.data);
            const movies = res.data.filter(
              (movie: Movie) => movie.id.toString() !== id?.toString()
            );
            this.setState(prev => ({...prev, similarMoviesByGenre: movies}));
          });
      });
  }

  render(): JSX.Element {
    return (
      <div className="certain_movie content">
        <HeaderMovie {...this.state.currentMovie} />
        <SearchOptionsMovie genres={this.state.currentMovie?.genres || []} />
        <CardContainer>
          {this.state.similarMoviesByGenre.length &&
            this.state.similarMoviesByGenre.map(movie => (
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
  }
}
