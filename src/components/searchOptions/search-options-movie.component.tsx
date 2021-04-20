import React from 'react';
import {searchOptionsClassName} from './search-options-classname';

interface SearchOptionsMovieProp {
  genres: string[];
}

export const SearchOptionsMovie: React.FC<SearchOptionsMovieProp> = ({genres}) => (
  <div className={searchOptionsClassName}>
    <p className={`${searchOptionsClassName}__genre`}>
      Film by <span>{genres && genres.join(' & ')}</span>
    </p>
  </div>
);
