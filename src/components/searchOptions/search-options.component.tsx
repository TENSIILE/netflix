import React from 'react';
import {Tabs, TabsContainer} from '@/components';
import {TabsType, Tab} from '@/types';
import {searchOptionsClassName} from './search-options-classname';
import './search-options.scss';

interface SearchOptionsProp {
  countMovies: number;
  sortTabs: Tab[];
  onSelect: (e: React.MouseEvent<HTMLLIElement>, name: TabsType) => void;
}

export const SearchOptions: React.FC<SearchOptionsProp> = ({countMovies, sortTabs, onSelect}) => (
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
