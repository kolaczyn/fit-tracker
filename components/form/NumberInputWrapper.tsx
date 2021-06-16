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
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

type NumberInputWrapperProps = {
  label: string;
  unit?: string;
  // I couldn't figure out a better way to make TypeScript happy
} & any;

export const NumberInputWrapper: React.FC<NumberInputWrapperProps> = ({
  label,
  unit,
  ...props
}) => {
  const [field, meta] = useField(props);
  console.log(meta.error);
  return (
    <>
      <FormControl isInvalid={meta.touched && !!meta.error}>
        <FormLabel>{label}</FormLabel>
        <InputGroup>
          <NumberInput>
            <NumberInputField {...field} {...props} />
          </NumberInput>
          {unit ? <InputRightAddon children={unit} /> : null}
        </InputGroup>
         {/* I capitalize the the first letter error, because Yup's validation includes the field's name in lowercase, and it look akward. */}
        <FormErrorMessage>
          {meta.error ? capitalizeFirstLetter(meta.error) : null}
        </FormErrorMessage>
      </FormControl>
    </>
  );
};
