import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import {AnyAction} from 'redux';
import {Header, SearchOptions, Card, CardContainer, Footer} from '@/components';
import {TabsStore, MoviesStore, Store} from '@/types/store.type';
import {Tab, TabsType} from '@/types';
import {ensure, sortMoviesByVoteAverageOrReleaseDate} from '@/utils/helpers.util';
import {
  changeInputAction,
  searchMoviesAction,
  initFetchMoviesAction,
  uploadCacheMoviesAction,
  toggleTabsAction,
  sortMoviesAction,
} from '@/redux/actions';

interface SelectedState {
  input: string;
  movies: MoviesStore;
  tabs: TabsStore;
}

const IndexPage: React.FC = (): JSX.Element => {
  const {input, movies, tabs} = useSelector<Store, SelectedState>(state => ({
    input: state.inputs.input,
    movies: state.movies,
    tabs: state.tabs,
  }));
  const dispatch = useDispatch();
  const router = useRouter();

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeInputAction(e));
  };

  const onFindActiveTab = (name: TabsType = 'tabs'): string => {
    return ensure(tabs[name].find((tab: Tab) => tab.isSelect)).title;
  };

  const onSearchMoviesHandler = (e: React.FormEvent<HTMLFormElement>): AnyAction | void => {
    e.preventDefault();

    if (!!input.trim()) {
      router.push(`/?search=${input}`);
      dispatch(searchMoviesAction(input, onFindActiveTab()));
      return;
    }

    if (movies.cacheMovies.length) {
      router.replace('/');
      return dispatch(uploadCacheMoviesAction());
    }

    router.replace('/');
    dispatch(initFetchMoviesAction(onFindActiveTab()));
  };

  const onToggleTabsSearchHandler = (
    e: React.MouseEvent<HTMLLIElement>,
    name: TabsType = 'tabs'
  ): void => {
    dispatch(toggleTabsAction(e, name));
  };

  useEffect((): void => {
    dispatch(initFetchMoviesAction(onFindActiveTab()));
  }, []);

  useEffect((): void => {
    const sortedMovies = sortMoviesByVoteAverageOrReleaseDate(
      movies.movies,
      onFindActiveTab('sortTabs')
    );
    dispatch(sortMoviesAction(sortedMovies));
  }, [tabs.sortTabs]);

  return (
    <div className="index_page content">
      <Header
        input={input}
        tabs={tabs.tabs}
        onToggleTabs={onToggleTabsSearchHandler}
        onChangeInput={onChangeInputHandler}
        onSearchMovies={onSearchMoviesHandler}
      />
      <SearchOptions
        countMovies={movies.movies.length}
        sortTabs={tabs.sortTabs}
        onSelect={onToggleTabsSearchHandler}
      />
      <CardContainer>
        {movies.movies.length &&
          movies.movies.map(movie => (
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

export default IndexPage;
