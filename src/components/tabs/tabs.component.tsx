import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import {Tab} from '@/types';
import {tabsContainerClassName} from './tabs-container-classname';

interface TabProp {
  tabs: Tab[];
  onSelect: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export const Tabs: React.FC<TabProp> = ({tabs = [], onSelect}) => {
  return (
    <TabsStyle className={`${tabsContainerClassName}__tab`}>
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
    </TabsStyle>
  );
};

const TabsStyle = styled.div`
  margin-left: 1em;

  .${tabsContainerClassName}__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;

    .${tabsContainerClassName}__item {
      padding: 0.5em 1em;
      text-transform: uppercase;
      color: #fff;
      background: #333;
      cursor: pointer;
      transition: 0.4s;

      &--active {
        background: ${props => props.theme.colors.main_color};
        color: #f5f5f5;

        &:hover {
          background: ${props => props.theme.colors.main_color};
        }
      }

      &:hover {
        background: ${props => props.theme.colors.color_lighten};
      }

      &:active {
        background: ${props => props.theme.colors.color_darken};
      }

      & + .${tabsContainerClassName}__item {
        margin-left: 1em;
      }
    }
  }
`;
