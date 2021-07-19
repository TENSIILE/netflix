import styled from 'styled-components';

export const Input = styled.input.attrs(() => ({
  type: 'text',
}))`
  position: relative;
  padding: 1.5em 2em;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  outline: none;
  border: none;
  color: #fff;
  font-size: 14px;
  border-bottom: 3px solid transparent;
  transition: 0.2s;

  &:focus {
    border-bottom-color: ${props => props.theme.colors.main_color};
  }
`;
