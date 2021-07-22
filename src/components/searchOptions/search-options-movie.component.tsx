import React from 'react';
import {Container, Genre} from '@/components/searchOptions/styled/search-options-movie.styled';

interface SearchOptionsMovieProp {
  genres: string[];
}

export const SearchOptionsMovie: React.FC<SearchOptionsMovieProp> = ({genres}) => (
  <Container>
    <Genre>
      Film by <span>{genres && genres.join(' & ')}</span>
    </Genre>
  </Container>
);
