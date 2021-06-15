import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

type NumberInputWrapperProps = {
  label: string;
  // I couldn't figure out a better way to make TypeScript happy
} & any;

export const NumberInputWrapper: React.FC<NumberInputWrapperProps> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormControl isInvalid={meta.touched && meta.error === ''}>
        <FormLabel>{label}</FormLabel>
        <NumberInput>
          <NumberInputField {...field} {...props} />
        </NumberInput>
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    </>
  );
};
