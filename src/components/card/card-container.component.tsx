import React from 'react';
import {Container, CardGrid} from '@/components/card/styled/card-container.styled';

export const CardContainer: React.FC = ({children}) => {
  return (
    <Container>
      <CardGrid isNotFound={!children}>{children ? children : 'No films found'}</CardGrid>
    </Container>
  );
};
