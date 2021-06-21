import type { AppProps } from 'next/app';
import React from 'react';

import { AppChakraProvider } from '../components/providers/AppChakraProvider';
import { StoreProvider } from '../components/providers/StoreProvider';
import { GeneralLayout } from '../components/layout/GeneralLayout';
import '../static/niceScrollbar.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <AppChakraProvider>
        <GeneralLayout>
          <Component {...pageProps} />
        </GeneralLayout>
      </AppChakraProvider>
    </StoreProvider>
  );
}
export default MyApp;
