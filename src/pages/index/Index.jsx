import React, {Component} from 'react';
import {Header, SearchOptions, Card, CardContainer, Footer} from '../../components';
import config from '../../config.json';
import './Index.scss';

export class IndexPage extends Component {
  state = {
    input: '',
    movies: [],
    cache_movies: [],
    tabs: [
      {id: 0, title: 'title', isSelect: true},
      {id: 1, title: 'genres', isSelect: false},
    ],
    sortTabs: [
      {id: 0, title: 'release date', isSelect: false},
      {id: 1, title: 'rating', isSelect: true},
    ],
  };

  onChangeInputHandler = e => {
    this.onChangeState('input', e.target.value);
  };

  onFindActiveTab = (name = 'tabs') => this.state[name].find(tab => tab.isSelect).title;

  onChangeState = (key, value) => {
    this.setState(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  onSearchMoviesHandler = () => {
    if (!!this.state.input.trim()) {
      fetch(
        `${config.SERVER_API}/movies?search=${this.state.input}&searchBy=${this.onFindActiveTab()}`
      )
        .then(res => res.json())
        .then(({data}) => {
          this.onChangeState('cache_movies', this.state.movies);
          this.onChangeState('movies', data);
        });
    } else {
      if (this.state.cache_movies.length) {
        this.onChangeState('movies', this.state.cache_movies);
      }
    }
  };

  onKeyPressEnterHandler = e => {
    if (e.key === 'Enter') {
      this.onSearchMoviesHandler();
    }
  };

  onToggleTabsSearchHandler = (e, name = 'tabs') => {
    this.onChangeState(
      name,
      this.state[name].map(tab => {
        if (e.target.getAttribute('name') === tab.title) {
          return {...tab, isSelect: true};
        }
        return {...tab, isSelect: false};
      })
    );
  };

  componentDidMount() {
    fetch(`${config.SERVER_API}/movies`)
      .then(res => res.json())
      .then(({data}) => {
        this.onChangeState('movies', data);
      });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.movies === this.state.movies && prevState.sortTabs !== this.state.sortTabs) {
      let stateMovies = [...this.state.movies];

      if (this.onFindActiveTab('sortTabs') === 'rating') {
        stateMovies.sort((a, b) => b.vote_average - a.vote_average);
      } else {
        stateMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      }

      this.onChangeState('movies', stateMovies);
    }
  }

  render() {
    return (
      <div className="index_page">
        <Header
          input={this.state.input}
          tabs={this.state.tabs}
          onToggleTabs={this.onToggleTabsSearchHandler}
          onChangeInput={this.onChangeInputHandler}
          onSearchMovies={this.onSearchMoviesHandler}
          onKeyPressEnterHandler={this.onKeyPressEnterHandler}
        />
        <SearchOptions
          countMovies={this.state.movies.length}
          sortTabs={this.state.sortTabs}
          onSelect={this.onToggleTabsSearchHandler}
        />
        <CardContainer>
          {this.state.movies.length &&
            this.state.movies.map(movie => (
              <Card
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                releaseYear={movie.release_date}
                genres={movie.genres}
              />
            ))}
        </CardContainer>
        <Footer />
      </div>
    );
  }
}
