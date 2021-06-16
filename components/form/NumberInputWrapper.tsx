import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  FormErrorMessage,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

type NumberInputWrapperProps = {
  label: string;
  unit?: string
  // I couldn't figure out a better way to make TypeScript happy
} & any;

export const NumberInputWrapper: React.FC<NumberInputWrapperProps> = ({
  label,
  unit,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormControl isInvalid={meta.touched && meta.error === ''}>
        <FormLabel>{label}</FormLabel>
        <InputGroup>
          <NumberInput>
            <NumberInputField {...field} {...props} />
          </NumberInput>
          {unit ? 
          <InputRightAddon children={unit} />
          : null
          }
        </InputGroup>
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    </>
  );
};
