import React from 'react';
import classnames from 'classnames';
import {tabsContainerClassName} from './TabsContainerClassName';
import './Tabs.scss';

export const Tabs = ({tabs = [], onSelect}) => {
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
              name={tab.title}
              onClick={onSelect}
            >
              {tab.title}
            </li>
          ))}
      </ul>
    </div>
  );
};
