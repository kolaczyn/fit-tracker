import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightAddon,
  Input,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

type InputWrapper = {
  label: string;
  unit?: string;
  // I couldn't figure out a better way to make TypeScript happy
  type: 'number' | 'text';
} & any;

export const InputWrapper: React.FC<InputWrapper> = ({
  label,
  unit,
  type,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormControl isInvalid={meta.touched && !!meta.error}>
        <FormLabel>{label}</FormLabel>
        <InputGroup>
          <Input step="any" {...field} {...props} type={type} />
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

InputWrapper.defaultProps = {
  // in HTML the default is text, but I can't be bothered to add type="number" attribute to dozens of InputWrapper's in this app
  type: 'number',
};
