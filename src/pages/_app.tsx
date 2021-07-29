import React from 'react';
import type {AppProps} from 'next/app';
import {GlobalLayout} from '@/layouts/layout';

const CustomApp = ({Component, pageProps}: AppProps): JSX.Element => (
  <GlobalLayout>
    <Component {...pageProps} />
  </GlobalLayout>
);

export default CustomApp;
