import styled from 'styled-components';
import {ListItem} from '@/components/tabs/styled/tabs.styled';
import {Title} from '@/components/tabs/styled/tabs-container.styled';

export const Container = styled.div`
  position: relative;
  padding: 0.5em 10rem;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;

  ${ListItem} {
    background: unset !important;
    color: #333 !important;
    font-weight: 600;

    &.active {
      color: ${props => props.theme.colors.main_color} !important;
    }
  }

  ${Title} {
    color: #333;
    text-transform: capitalize;
  }
`;

export const Genre = styled.p`
  font-weight: 600;
`;
