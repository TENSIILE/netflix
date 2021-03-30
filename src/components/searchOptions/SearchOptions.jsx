import React from 'react';
import {Tabs, TabsContainer} from '../';
import {searchOptionsClassName} from './SearchOptionsClassName';
import './SearchOptions.scss';

export const SearchOptions = ({countMovies, sortTabs, onSelect}) => (
  <div className={searchOptionsClassName}>
    <div className={`${searchOptionsClassName}__left`}>
      <p className={`${searchOptionsClassName}__count_of_movies_found`}>
        {countMovies} movies found
      </p>
    </div>
    <div className={`${searchOptionsClassName}__right`}>
      <TabsContainer title="Sort by">
        <Tabs tabs={sortTabs} onSelect={e => onSelect(e, 'sortTabs')} />
      </TabsContainer>
    </div>
  </div>
);
