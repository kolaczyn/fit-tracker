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
import { NextSeo } from 'next-seo';
import React from 'react';
import { AuthPage } from '../components/layout/AuthPage';
import { AppBox } from '../components/ui/AppBox';
import NextLink from 'next/link';

export const LoginPage: React.FC = ({}) => {
  return (
    <>
      <NextSeo title="Login | Track Fit" />
      <AuthPage illustrationUrl="/undraw-pilates.svg">
        <AppBox>
          <Heading>Welcome Back!</Heading>
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
            <Checkbox alignSelf="flex-start" defaultIsChecked>
              Remember Me
            </Checkbox>
            <Text alignSelf="flex-start">
              <NextLink href="/register">
                <ChakraLink>Don't have an account yet? Register instead</ChakraLink>
              </NextLink>
            </Text>
            <Button isFullWidth>Login</Button>
          </VStack>
        </AppBox>
      </AuthPage>
    </>
  );
};
export default LoginPage;

// <>
// <NextSeo title="BMI Calculator | Track Fit" />
// <Formik
//   validationSchema={validationSchema}
//   initialValues={initialFormState}
//   onSubmit={(formState: BMICalculatorData<string>) => {
//     const { height: heightInCm, weight: weightInKg } =
//       stringValuesToNums(formState);
//     setBmi(calculateBMI({ weightInKg, heightInCm }));
//     dispatch(updateMetrics({ weight: weightInKg, height: heightInCm }));
//   }}
// >
//   {() => (
//     <Form>
//       <VStack spacing={4} alignItems="stretch">
//         <InputWrapper
//           label="Height"
//           name="height"
//           placeholder={0}
//           unit="cm"
//         />
//         <InputWrapper
//           label="Weight"
//           name="weight"
//           placeholder={0}
//           unit="kg"
//         />
//         <SubmitAndResult value={bmi} text="Your BMI is:" />
//       </VStack>
//     </Form>
//   )}
// </Formik>
// </>
