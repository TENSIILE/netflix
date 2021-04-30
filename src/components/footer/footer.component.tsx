import React from 'react';
import './footer.scss';

const footerClassName = 'footer';

export const Footer: React.FC = () => (
  <div className={footerClassName}>
    <p className={`${footerClassName}__title`}>Netflixroulette</p>
  </div>
);