import React, {Component} from 'react';
import {Header, SearchOptions, Card, CardContainer, Footer} from '../../components';
import {IIndexState} from '../../interfaces/pages';
import {ITab} from '../../interfaces/components';
import {Tabs} from '../../types';
import {ensure} from '../../utils/helpers';
import config from '../../config.json';
import './Index.scss';

export class IndexPage extends Component<any, IIndexState> {
  constructor(props: any) {
    super(props);

    this.state = {
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

    this.onChangeInputHandler = this.onChangeInputHandler.bind(this);
    this.onFindActiveTab = this.onFindActiveTab.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onSearchMoviesHandler = this.onSearchMoviesHandler.bind(this);
    this.onKeyPressEnterHandler = this.onKeyPressEnterHandler.bind(this);
    this.onToggleTabsSearchHandler = this.onToggleTabsSearchHandler.bind(this);
  }

  onChangeInputHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    this.onChangeState('input', e.target.value);
  }

  onFindActiveTab(name: Tabs = 'tabs'): string {
    return ensure(this.state[name].find((tab: ITab) => tab.isSelect)).title;
  }

  onChangeState(key: keyof IIndexState, value: string | Array<any>): void {
    this.setState(prev => ({
      ...prev,
      [key]: value,
    }));
  }

  onSearchMoviesHandler(): void {
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
  }

  onKeyPressEnterHandler(e: React.KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.onSearchMoviesHandler();
    }
  }

  onToggleTabsSearchHandler(e: React.MouseEvent<HTMLLIElement>, name: Tabs = 'tabs'): void {
    this.onChangeState(
      name,
      this.state[name].map(tab => {
        if (e.currentTarget.dataset.name === tab.title) {
          return {...tab, isSelect: true};
        }
        return {...tab, isSelect: false};
      })
    );
  }

  componentDidMount(): void {
    fetch(`${config.SERVER_API}/movies`)
      .then(res => res.json())
      .then(({data}) => {
        this.onChangeState('movies', data);
      });
  }

  componentDidUpdate(_: any, prevState: IIndexState): void {
    if (prevState.movies === this.state.movies && prevState.sortTabs !== this.state.sortTabs) {
      const stateMovies = [...this.state.movies];

      if (this.onFindActiveTab('sortTabs') === 'rating') {
        stateMovies.sort((a, b): number => b.vote_average - a.vote_average);
      } else {
        stateMovies.sort((a, b): number => +new Date(b.release_date) - +new Date(a.release_date));
      }

      this.onChangeState('movies', stateMovies);
    }
  }

  render(): JSX.Element {
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
