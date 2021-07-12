import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  padding: 1em 4em;
  outline: none;
  border: none;
  color: #fff;
  text-transform: uppercase;
  background: ${props => props.theme.colors.main_color};
  cursor: pointer;
  transition: 0.4s;

  &.btn__link {
    background: #fff;
    color: ${props => props.theme.colors.main_color};

    &:hover {
      color: #fff;
    }
  }

  &:hover {
    background: ${props => props.theme.colors.color_lighten};
  }

  &:active {
    background: ${props => props.theme.colors.color_darken};
  }
`;
