import React from 'react';
import styled from 'styled-components';
import {searchOptionsClassName} from './search-options-classname';

interface SearchOptionsMovieProp {
  genres: string[];
}

export const SearchOptionsMovie: React.FC<SearchOptionsMovieProp> = ({genres}) => (
  <SearchOptionsMovieStyle className={searchOptionsClassName}>
    <p className={`${searchOptionsClassName}__genre`}>
      Film by <span>{genres && genres.join(' & ')}</span>
    </p>
  </SearchOptionsMovieStyle>
);

export const SearchOptionsMovieStyle = styled.div`
  position: relative;
  padding: 0.5em 10rem;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;

  &__genre {
    font-weight: 600;
  }
`;
