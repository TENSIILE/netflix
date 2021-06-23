import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Header, SearchOptions, Card, CardContainer, Footer} from '@/components';
import {Tab, TabsType, Store} from '@/types';
import {ensure} from '@/utils/helpers.util';
import {
  changeInputAction,
  searchMoviesAction,
  initFetchMoviesAction,
  uploadCacheMoviesAction,
  toggleTabsAction,
  sortMoviesAction,
} from '@/redux/actions';
import './index.style.scss';

export const IndexPage: React.FC = (): JSX.Element => {
  const state = useSelector<Store, Store>(state => state);
  const dispatch = useDispatch();

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeInputAction(e));
  };

  const onFindActiveTab = (name: TabsType = 'tabs'): string => {
    return ensure(state.tabs[name].find((tab: Tab) => tab.isSelect)).title;
  };

  const onSearchMoviesHandler = (): void => {
    if (!!state.inputs.input.trim()) {
      dispatch(searchMoviesAction(state.inputs.input, onFindActiveTab()));
    } else {
      if (state.movies.cacheMovies.length) {
        dispatch(uploadCacheMoviesAction());
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
    dispatch(toggleTabsAction(e, name));
  };

  useEffect((): void => {
    dispatch(initFetchMoviesAction());
  }, []);

  useEffect((): void => {
    const stateMovies = [...state.movies.movies];

    if (onFindActiveTab('sortTabs') === 'rating') {
      stateMovies.sort((a, b): number => b.voteAverage - a.voteAverage);
    } else {
      stateMovies.sort(
        (a, b): number => Number(new Date(b.releaseDate)) - Number(new Date(a.releaseDate))
      );
    }

    dispatch(sortMoviesAction(stateMovies));
  }, [state.tabs.sortTabs]);

  return (
    <div className="index_page">
      <Header
        input={state.inputs.input}
        tabs={state.tabs.tabs}
        onToggleTabs={onToggleTabsSearchHandler}
        onChangeInput={onChangeInputHandler}
        onSearchMovies={onSearchMoviesHandler}
        onKeyPressEnterHandler={onKeyPressEnterHandler}
      />
      <SearchOptions
        countMovies={state.movies.movies.length}
        sortTabs={state.tabs.sortTabs}
        onSelect={onToggleTabsSearchHandler}
      />
      <CardContainer>
        {state.movies.movies.length &&
          state.movies.movies.map(movie => (
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
