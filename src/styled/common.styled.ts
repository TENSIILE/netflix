import styled from 'styled-components';

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
