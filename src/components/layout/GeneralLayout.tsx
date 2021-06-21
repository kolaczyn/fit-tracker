import {
  Flex,
  Container,
  useColorModeValue,
  Box,
  Grid,
} from '@chakra-ui/react';
import React from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Sidebar } from '../sidebar';
import { useRouter } from 'next/router';

const NO_SIDEBAR_ROUTES = ['/login', '/register'];

export const GeneralLayout: React.FC = ({ children }) => {
  const bg = useColorModeValue('green.50', 'gray.900');
  const color = useColorModeValue('gray.900', 'white');
  const router = useRouter();
  const isFullPageLayout = NO_SIDEBAR_ROUTES.includes(router.pathname);
  return (
    <Flex direction="column" minH="100vh" bg={bg} color={color}>
      <Navbar />
      <Container display="flex" justifyContent="center" flexDirection="column" maxW="container.lg" flexGrow={1} my="8">
        {isFullPageLayout ? (
          <Box>{children}</Box>
        ) : (
          <Grid templateColumns={['1fr', '1fr', '8fr 4fr']} gap="8">
            <Box>{children}</Box>
            <Sidebar display={['none', 'none', 'initial']} />
          </Grid>
        )}
      </Container>
      <Footer />
    </Flex>
  );
};
