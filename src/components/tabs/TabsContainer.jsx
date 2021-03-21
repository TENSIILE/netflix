import React from 'react';
import {_classname} from './Tabs';

export const TabsContainer = ({title = 'Search by', children}) => (
  <div className={_classname}>
    <p className={`${_classname}__title`}>{title}</p>
    {children}
  </div>
);
