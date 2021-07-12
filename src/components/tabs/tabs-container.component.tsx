import React from 'react';
import styled from 'styled-components';
import {tabsContainerClassName} from './tabs-container-classname';

interface TabsContainerProp {
  title?: string;
}

export const TabsContainer: React.FC<TabsContainerProp> = ({title = 'Search by', children}) => (
  <TabContainerStyle className={tabsContainerClassName}>
    <p className={`${tabsContainerClassName}__title`}>{title}</p>
    {children}
  </TabContainerStyle>
);

const TabContainerStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .${tabsContainerClassName}__title {
    color: #fff;
    text-transform: uppercase;
  }
`;
