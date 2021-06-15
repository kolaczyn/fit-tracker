import type { AppProps } from 'next/app';
import { Box, ChakraProvider, Container, Flex, Spacer } from '@chakra-ui/react';

import { Provider } from 'react-redux';

import store from '../redux/store';
import { NavbarComponent } from '../components/NavbarComponent';
import { FooterComponent } from '../components/FooterComponent';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Flex direction="column" minH="100vh">
          <NavbarComponent />
          <Container>
            <Component {...pageProps} />
          </Container>
          <Spacer />
          <FooterComponent />
        </Flex>
      </ChakraProvider>
    </Provider>
  );
}
export default MyApp;
