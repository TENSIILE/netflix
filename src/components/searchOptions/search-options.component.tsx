import React from 'react';
import {Tabs, TabsContainer} from '@/components';
import {TabsType, Tab} from '@/types';
import {Container} from '@/components/searchOptions/styled/search-options-movie.styled';
import {Flex} from '@/global.styled';

interface SearchOptionsProp {
  countMovies: number;
  sortTabs: Tab[];
  onSelect: (e: React.MouseEvent<HTMLLIElement>, name: TabsType) => void;
}

export const SearchOptions: React.FC<SearchOptionsProp> = ({countMovies, sortTabs, onSelect}) => (
  <Container>
    <p>{countMovies} movies found</p>
    <Flex alignItems="center">
      <TabsContainer title="Sort by">
        <Tabs tabs={sortTabs} onSelect={e => onSelect(e, 'sortTabs')} />
      </TabsContainer>
    </Flex>
  </Container>
);
