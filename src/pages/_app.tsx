import React from 'react';
import type {AppProps} from 'next/app';
import {GlobalLayout} from '@/layouts/layout';
import {Head} from '@/layouts/head.layout';

const App = ({Component, pageProps}: AppProps): JSX.Element => (
  <GlobalLayout>
    <Head />
    <Component {...pageProps} />
  </GlobalLayout>
);

export default App;
