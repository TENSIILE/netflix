import React, {useState, useEffect} from 'react';
import {Header, SearchOptions, Card, CardContainer, Footer} from '@/components';
import {Movie} from '@/types/movie.type';
import {Tab, TabsType} from '@/types';
import {ensure, renamePropsObj} from '@/utils/helpers.util';
import config from '@/config.json';
import './index.style.scss';

interface IndexPageState {
  input: string;
  movies: Movie[];
  cacheMovies: Movie[];
  tabs: Tab[];
  sortTabs: Tab[];
}

export const IndexPage: React.FC = (): JSX.Element => {
  const [state, setState] = useState<IndexPageState>({
    input: '',
    movies: [],
    cacheMovies: [],
    tabs: [
      {id: 0, title: 'title', isSelect: true},
      {id: 1, title: 'genres', isSelect: false},
    ],
    sortTabs: [
      {id: 0, title: 'release date', isSelect: false},
      {id: 1, title: 'rating', isSelect: true},
    ],
  });

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChangeState('input', e.target.value);
  };

  const onFindActiveTab = (name: TabsType = 'tabs'): string => {
    return ensure(state[name].find((tab: Tab) => tab.isSelect)).title;
  };

  const onChangeState = (key: keyof IndexPageState, value: string | Array<Tab | Movie>): void => {
    setState(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSearchMoviesHandler = (): void => {
    if (!!state.input.trim()) {
      fetch(`${config.SERVER_API}/movies?search=${state.input}&searchBy=${onFindActiveTab()}`)
        .then(res => res.json())
        .then(({data}) => {
          renamePropsObj(data);
          onChangeState('cacheMovies', state.movies);
          onChangeState('movies', data);
        });
    } else {
      if (state.cacheMovies.length) {
        onChangeState('movies', state.cacheMovies);
      }
    }
  };

  const onKeyPressEnterHandler = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      onSearchMoviesHandler();
    }
  };

  const onToggleTabsSearchHandler = (
    e: React.MouseEvent<HTMLLIElement>,
    name: TabsType = 'tabs'
  ): void => {
    onChangeState(
      name,
      state[name].map(tab => {
        if (e.currentTarget.dataset.name === tab.title) {
          return {...tab, isSelect: true};
        }
        return {...tab, isSelect: false};
      })
    );
  };

  useEffect((): void => {
    fetch(`${config.SERVER_API}/movies`)
      .then(res => res.json())
      .then(({data}) => {
        renamePropsObj(data);
        onChangeState('movies', data);
      });
  }, []);

  useEffect((): void => {
    const stateMovies = [...state.movies];

    if (onFindActiveTab('sortTabs') === 'rating') {
      stateMovies.sort((a, b): number => b.voteAverage - a.voteAverage);
    } else {
      stateMovies.sort((a, b): number => +new Date(b.releaseDate) - +new Date(a.releaseDate));
    }

    onChangeState('movies', stateMovies);
  }, [state.sortTabs]);

  return (
    <div className="index_page">
      <Header
        input={state.input}
        tabs={state.tabs}
        onToggleTabs={onToggleTabsSearchHandler}
        onChangeInput={onChangeInputHandler}
        onSearchMovies={onSearchMoviesHandler}
        onKeyPressEnterHandler={onKeyPressEnterHandler}
      />
      <SearchOptions
        countMovies={state.movies.length}
        sortTabs={state.sortTabs}
        onSelect={onToggleTabsSearchHandler}
      />
      <CardContainer>
        {state.movies.length &&
          state.movies.map(movie => (
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
