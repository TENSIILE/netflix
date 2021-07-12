import React from 'react';
import styled from 'styled-components';

const footerClassName = 'footer';

export const Footer: React.FC = () => (
  <FooterStyle className={footerClassName}>
    <p className={`${footerClassName}__title`}>Netflixroulette</p>
  </FooterStyle>
);

const FooterStyle = styled.div`
  background: #333;
  padding: 1em 10em;

  .${footerClassName}__title {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.colors.main_color};
    text-transform: capitalize;
    font-weight: 600;
  }
`;
