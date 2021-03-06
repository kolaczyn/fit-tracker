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

export const GeneralLayout: React.FC = ({ children }) => {
  const bg = useColorModeValue('green.50', 'gray.900');
  const color = useColorModeValue('gray.900', 'white');
  return (
    <Flex direction="column" minH="100vh" bg={bg} color={color}>
      <Navbar />
      <Container maxW="container.lg" flexGrow={1} my="4">
        <Grid templateColumns={['1fr', '1fr', '8fr 4fr']} gap="8">
          <Box>{children}</Box>
          <Sidebar/>
        </Grid>
      </Container>
      <Footer />
    </Flex>
  );
};
