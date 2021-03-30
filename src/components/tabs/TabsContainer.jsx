import React from 'react';
import {tabsContainerClassName} from './TabsContainerClassName';

export const TabsContainer = ({title = 'Search by', children}) => (
  <div className={tabsContainerClassName}>
    <p className={`${tabsContainerClassName}__title`}>{title}</p>
    {children}
  </div>
);
