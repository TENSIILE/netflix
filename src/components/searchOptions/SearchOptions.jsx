import React from 'react';
import {Tabs} from '../';
import './SearchOptions.scss';

export const SearchOptions = ({countMovies, sortTabs, onSelect}) => (
  <div className="search_options">
    <div className="search_options__left">
      <p className="search_options__count_of_movies_found">{countMovies} movies found</p>
    </div>
    <div className="search_options__right">
      <Tabs.Container title="Sort by">
        <Tabs tabs={sortTabs} onSelect={e => onSelect(e, 'sortTabs')} />
      </Tabs.Container>
    </div>
  </div>
);

SearchOptions.Movie = ({genres}) => (
  <div className="search_options">
    <p className="search_options__genre">
      Film by <span>{genres && genres.join(' & ')}</span>
    </p>
  </div>
);
