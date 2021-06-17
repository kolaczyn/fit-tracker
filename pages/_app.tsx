import { Container, Flex, Spacer } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import { ChakraWrapper } from '../components/ChakraWrapper';
import { FooterComponent } from '../components/FooterComponent';
import { NavbarComponent } from '../components/NavbarComponent';
import store from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraWrapper>
        <Flex direction="column" minH="100vh">
          <NavbarComponent />
          <Container>
            <Component {...pageProps} />
          </Container>
          <Spacer />
          <FooterComponent />
        </Flex>
      </ChakraWrapper>
    </Provider>
  );
}
export default MyApp;
