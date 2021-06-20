import { Radio } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

type RadioWrapperProps = {
  label: string;
  // I couldn't figure out a better way to make TypeScript happy
} & any;

export const RadioWrapper: React.FC<RadioWrapperProps> = React.forwardRef(
  ({ label, ...props }, ref) => {
    const [field] = useField(props);
    return (
      <Radio ref={ref} {...field} {...props}>
        {label}
      </Radio>
    );
  }
);
