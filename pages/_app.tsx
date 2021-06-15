import type { AppProps } from 'next/app';
import { ChakraProvider, Container } from '@chakra-ui/react';

import { Provider } from 'react-redux';

import store from '../redux/store';
import { NavbarComponent } from '../components/NavbarComponent';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <NavbarComponent />
        <Container>
        <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </Provider>
  );
}
export default MyApp;
