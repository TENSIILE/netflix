import React from 'react';
import {Tabs, TabsContainer} from '../';
import './SearchOptions.scss';

export const _classname = 'search_options';

export const SearchOptions = ({countMovies, sortTabs, onSelect}) => (
  <div className={_classname}>
    <div className={`${_classname}__left`}>
      <p className={`${_classname}__count_of_movies_found`}>{countMovies} movies found</p>
    </div>
    <div className={`${_classname}__right`}>
      <TabsContainer title="Sort by">
        <Tabs tabs={sortTabs} onSelect={e => onSelect(e, 'sortTabs')} />
      </TabsContainer>
    </div>
  </div>
);
