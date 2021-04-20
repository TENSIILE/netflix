import React from 'react';
import classnames from 'classnames';
import {tabsContainerClassName} from './tabs-container-classname';
import {Tab} from '../../types';
import './tabs.scss';

interface TabProp {
  tabs: Tab[];
  onSelect: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export const Tabs: React.FC<TabProp> = ({tabs = [], onSelect}) => {
  return (
    <div className={`${tabsContainerClassName}__tab`}>
      <ul className={`${tabsContainerClassName}__list`}>
        {tabs.length &&
          tabs.map(tab => (
            <li
              className={classnames(`${tabsContainerClassName}__item`, {
                [`${tabsContainerClassName}__item--active`]: tab.isSelect,
              })}
              key={tab.id}
              data-name={tab.title}
              onClick={onSelect}
            >
              {tab.title}
            </li>
          ))}
      </ul>
    </div>
  );
};
