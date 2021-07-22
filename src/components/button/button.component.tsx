import styled from 'styled-components';

interface ButtonProps {
  isLink?: boolean;
}

export const Button = styled.button<ButtonProps>`
  position: relative;
  padding: 1em 4em;
  outline: none;
  border: none;
  color: #fff;
  text-transform: uppercase;
  background: ${props => props.theme.colors.color_main};
  cursor: pointer;
  transition: 0.4s;

  ${props =>
    props.isLink &&
    `
    background: #fff;
    color: ${props.theme.colors.color_main};

    &:hover {
      color: #fff;
    }
  `}

  &:hover {
    background: ${props => props.theme.colors.color_lighten};
  }

  &:active {
    background: ${props => props.theme.colors.color_darken};
  }
`;
