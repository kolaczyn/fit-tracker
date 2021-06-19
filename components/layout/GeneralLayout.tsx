import { Flex, Container, Spacer } from '@chakra-ui/react';
import React from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const GeneralLayout: React.FC = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Container my="4">{children}</Container>
      <Spacer />
      <Footer />
    </Flex>
  );
};
