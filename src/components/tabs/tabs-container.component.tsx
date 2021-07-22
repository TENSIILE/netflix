import React from 'react';
import {Container, Title} from '@/components/tabs/styled/tabs-container.styled';
import {Flex} from '@/styled/common.styled';

interface TabsContainerProp {
  title?: string;
}

export const TabsContainer: React.FC<TabsContainerProp> = ({title = 'Search by', children}) => (
  <Container>
    <Flex alignItems="center">
      <Title>{title}</Title>
      {children}
    </Flex>
  </Container>
);
