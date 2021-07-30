import React from 'react';
import NextHead from 'next/head';

interface HeadProps {
  title?: string;
  addedTitle?: string;
}

const TITLE = 'Netflixroulette';

export const Head: React.FC<HeadProps> = ({title = TITLE, addedTitle}): JSX.Element => (
  <NextHead>
    <title>{title && !addedTitle ? title : `${title} | ${addedTitle}`}</title>
  </NextHead>
);
