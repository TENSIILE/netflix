import React from 'react';
import styled from 'styled-components';
import {Tabs, TabsContainer} from '@/components';
import {TabsType, Tab} from '@/types';
import {tabsContainerClassName} from '@/components/tabs/tabs-container-classname';
import {searchOptionsClassName} from './search-options-classname';
import {SearchOptionsMovieStyle} from './search-options-movie.component';

interface SearchOptionsProp {
  countMovies: number;
  sortTabs: Tab[];
  onSelect: (e: React.MouseEvent<HTMLLIElement>, name: TabsType) => void;
}

export const SearchOptions: React.FC<SearchOptionsProp> = ({countMovies, sortTabs, onSelect}) => (
  <SearchOptionsStyle className={searchOptionsClassName}>
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
  </SearchOptionsStyle>
);

const SearchOptionsStyle = styled(SearchOptionsMovieStyle)`
  .${searchOptionsClassName}__right {
    display: flex;
    align-items: center;

    .${tabsContainerClassName}__title {
      color: #333;
      text-transform: capitalize;
    }

    .${tabsContainerClassName}__item {
      background: unset !important;
      color: #333 !important;
      font-weight: 600;

      &--active {
        color: ${props => props.theme.colors.main_color} !important;
      }
    }
  }
`;
