import {
  Box,
  Button,
  Heading,
  Link as ChakraLink,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { NextSeo } from 'next-seo';
import NextLink from 'next/link';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { InputWrapper } from '../components/form/InputWrapper';
import { AuthPage } from '../components/layout/AuthPage';
import { AppBox } from '../components/ui/AppBox';
import { register } from '../redux/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import passwordPlaceholderDots from '../static/passwordPlaceholderDots';

export const RegisterPage: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.auth.isLoading);
  const [firebaseError, setFirebaseError] = useState('');
  return (
    <>
      <NextSeo title="Register | Track Fit" />
      <AuthPage illustrationUrl="/undraw-login.svg">
        <AppBox>
          <Heading>Register</Heading>
          <Box my="5">
            <hr />
          </Box>
          <Formik
            validationSchema={Yup.object({
              email: Yup.string().email().required(),
              password: Yup.string().min(6).required(),
              confirmPassword: Yup.string().oneOf(
                [Yup.ref('password')],
                "The passwords don't match"
              ),
            })}
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            onSubmit={async ({ email, password }) => {
              const { payload } = await dispatch(register({ email, password }));
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
                  <InputWrapper
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    variant="filled"
                    placeholder={passwordPlaceholderDots}
                  />

                  <Text alignSelf="flex-start" textColor="red.400">
                    {firebaseError}
                  </Text>
                  <Text alignSelf="flex-start">
                    Already have an account?{' '}
                    <NextLink href="/login">
                      <ChakraLink color="teal.500">Log In instead</ChakraLink>
                    </NextLink>
                  </Text>
                  <Button type="submit" isDisabled={isLoading} isFullWidth>
                    {isLoading ? 'Please Wait...' : 'Register'}
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
export default RegisterPage;
