import styled from 'styled-components';

export const Container = styled.div`
  background: #333;
  padding: 1em 10em;
`;

export const Title = styled.p`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.colors.color_main};
  text-transform: capitalize;
  font-weight: 600;
`;
