import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Link as ChakraLink,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import React from 'react';
import { AuthPage } from '../components/layout/AuthPage';
import { AppBox } from '../components/ui/AppBox';
import NextLink from 'next/link';

export const RegisterPage: React.FC = ({}) => {
  return (
    <>
      <NextSeo title="Register | Track Fit" />
      <AuthPage illustrationUrl="/undraw-login.svg">
        <AppBox>
          <Heading>Register</Heading>
          <Box my="5">
            <hr />
          </Box>
          <VStack spacing="4">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input variant="filled" placeholder="example@gmail.com" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input variant="filled" placeholder="Password" />
            </FormControl>
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input variant="filled" placeholder="Confirm Password" />
            </FormControl>
            <Text alignSelf="flex-start">
              <NextLink href="/login">
                <ChakraLink>Already have an account? Log In instead</ChakraLink>
              </NextLink>
            </Text>
            <Button isFullWidth>Register</Button>
          </VStack>
        </AppBox>
      </AuthPage>
    </>
  );
};
export default RegisterPage;
