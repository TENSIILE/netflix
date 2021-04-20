import React from 'react';
import {tabsContainerClassName} from './tabs-container-classname';

interface TabsContainerProp {
  title?: string;
}

export const TabsContainer: React.FC<TabsContainerProp> = ({title = 'Search by', children}) => (
  <div className={tabsContainerClassName}>
    <p className={`${tabsContainerClassName}__title`}>{title}</p>
    {children}
  </div>
);
