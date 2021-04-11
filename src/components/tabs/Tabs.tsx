import React from 'react';
import classnames from 'classnames';
import {tabsContainerClassName} from './TabsContainerClassName';
import {ITabProp} from '../../interfaces/components';
import './Tabs.scss';

export const Tabs: React.FC<ITabProp> = ({tabs = [], onSelect}) => {
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
