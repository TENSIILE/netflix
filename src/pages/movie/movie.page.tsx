import React, {Component} from 'react';
import {HeaderMovie, Card, CardContainer, SearchOptionsMovie, Footer} from '../../components';
import {Movie} from '../../types/movie.type';
import config from '../../config.json';

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
      .then((res: Movie) => {
        this.setState(prev => ({...prev, currentMovie: res}));

        fetch(`${config.SERVER_API}/movies?filter=${res.genres.join(',')}`)
          .then(res => res.json())
          .then(res => {
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
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                genres={movie.genres}
              />
            ))}
        </CardContainer>
        <Footer />
      </div>
    );
  }
}
