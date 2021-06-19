import { Flex, Container, Spacer, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const GeneralLayout: React.FC = ({ children }) => {
  const bg = useColorModeValue('green.50', 'gray.900');
  const color = useColorModeValue('gray.900', 'white');
  return (
    <Flex direction="column" minH="100vh" bg={bg} color={color}>
      <Navbar />
      <Container my="4">{children}</Container>
      <Spacer />
      <Footer />
    </Flex>
  );
};
