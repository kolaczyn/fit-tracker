import { Container, Flex, Spacer } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import { ChakraWrapper } from '../components/ChakraWrapper';
import { ContextContainer } from '../containers/ContextContainer';
import { FooterComponent } from '../components/FooterComponent';
import { NavbarComponent } from '../components/NavbarComponent';
import store from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextContainer>
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
    </ContextContainer>
  );
}
export default MyApp;
