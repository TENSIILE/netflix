import React from 'react';
import {_classname} from './SearchOptions';

export const SearchOptionsMovie = ({genres}) => (
  <div className={_classname}>
    <p className={`${_classname}__genre`}>
      Film by <span>{genres && genres.join(' & ')}</span>
    </p>
  </div>
);
