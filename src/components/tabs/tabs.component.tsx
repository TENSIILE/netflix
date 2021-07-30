import React from 'react';
import {Tab} from '@/types';
import {Container, List, ListItem} from '@/components/tabs/styled/tabs.styled';

interface TabProp {
  tabs: Tab[];
  onSelect: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export const Tabs: React.FC<TabProp> = ({tabs = [], onSelect}) => {
  return (
    <Container>
      <List>
        {tabs.length &&
          tabs.map(tab => (
            <ListItem isActive={tab.isSelect} key={tab.id} data-name={tab.title} onClick={onSelect}>
              {tab.title}
            </ListItem>
          ))}
      </List>
    </Container>
  );
};
