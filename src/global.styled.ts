import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  #root,
  .container,
  body {
    height: 100%;
  }

  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export default {
  colors: {
    main_color: 'rgb(255, 80, 103)',
    color_lighten: 'rgb(252, 96, 117)',
    color_darken: 'rgb(223, 67, 88)',
  },
};

type AlignItems = 'center';
type JustifyContent = 'center' | 'space-between';
type FlexDirection = 'column' | 'row';
type FlexWrap = 'wrap';

interface FlexProps {
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
`;
