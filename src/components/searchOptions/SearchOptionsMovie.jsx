import React from 'react';
import {searchOptionsClassName} from './SearchOptionsClassName';

export const SearchOptionsMovie = ({genres}) => (
  <div className={searchOptionsClassName}>
    <p className={`${searchOptionsClassName}__genre`}>
      Film by <span>{genres && genres.join(' & ')}</span>
    </p>
  </div>
);
