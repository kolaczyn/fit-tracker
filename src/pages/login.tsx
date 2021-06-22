import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Link as ChakraLink,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';
import { AuthPage } from '../components/layout/AuthPage';
import { AppBox } from '../components/ui/AppBox';
import NextLink from 'next/link';
import passwordPlaceholderDots from '../static/passwordPlaceholderDots';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Formik, Form } from 'formik';
import { InputWrapper } from '../components/form/InputWrapper';
import { logIn } from '../redux/authSlice';

export const LoginPage: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.auth.isLoading);
  const [firebaseError, setFirebaseError] = useState('');
  return (
    <>
      <NextSeo title="Login | Track Fit" />
      <AuthPage illustrationUrl="/undraw-pilates.svg">
        <AppBox>
          <Heading>Login</Heading>
          <Box my="5">
            <hr />
          </Box>
          <Formik
            validationSchema={Yup.object({
              email: Yup.string().email().required(),
              password: Yup.string().min(6).required(),
            })}
            initialValues={{ email: '', password: '' }}
            onSubmit={async ({ email, password }) => {
              const { payload } = await dispatch(logIn({ email, password }));
              setFirebaseError(payload);
            }}
          >
            {() => (
              <Form>
                <VStack spacing="4">
                  <InputWrapper
                    variant="filled"
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                  />
                  <InputWrapper
                    label="Password"
                    name="password"
                    type="password"
                    variant="filled"
                    placeholder={passwordPlaceholderDots}
                  />

                  <Text alignSelf="flex-start" textColor="red.400">
                    {firebaseError}
                  </Text>

                  <Text alignSelf="flex-start">
                    Already have an account?{' '}
                    <NextLink href="/register">
                      <ChakraLink color="teal.500">Register instead</ChakraLink>
                    </NextLink>
                  </Text>

                  <Button type="submit" isDisabled={isLoading} isFullWidth>
                    {isLoading ? 'Please Wait...' : 'Login'}
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </AppBox>
      </AuthPage>
    </>
  );
};
export default LoginPage;
