import {
  Radio
} from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

type RadioWrapperProps = {
  label: string;
  // I couldn't figure out a better way to make TypeScript happy
} & any;

export const RadioWrapper: React.FC<RadioWrapperProps> = ({
  label,
  ...props
}) => {
  const [field] = useField(props);
  return <Radio {...field} {...props}>{label}</Radio>;
};
