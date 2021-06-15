import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { NumberInputField } from '@chakra-ui/number-input';
import { Button, NumberInput } from '@chakra-ui/react';
import * as Yup from 'yup';
import { Field, Form, Formik, useField } from 'formik';
import { valueScaleCorrection } from 'framer-motion/types/render/dom/projection/scale-correction';
import React, { useState } from 'react';
import { Nutrients } from '../customTypes';

import { useAppDispatch } from '../redux/hooks';
import { addNutrients } from '../redux/nutrientsSlice';

interface NutrientsInputContainerProps {}

type MyTextInputProps = {
  label: string;
  // I couldn't figure out a better way to make TypeScript happy
} & any;

const MyNumberInput: React.FC<MyTextInputProps> = ({ label, ...props }) => {
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

const validationSchema = Yup.object({
  calories: Yup.number().min(0).required(),
  fat: Yup.number().min(0).required(),
  carbs: Yup.number().min(0).required(),
  protein: Yup.number().min(0).required(),
});

// I should rename this to NutrientsFormContainerProps
export const NutrientsInputContainer: React.FC<NutrientsInputContainerProps> =
  ({}) => {
    const dispatch = useAppDispatch();

    return (
      <Formik
        validationSchema={validationSchema}
        initialValues={{ calories: '', fat: '', carbs: '', protein: '' }}
        // onSubmit={formikHandleSubmit}
        onSubmit={(
          { calories, fat, carbs, protein }: Nutrients<string>,
          { setSubmitting }
        ) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2))
            console.log(typeof calories);
            dispatch(
              addNutrients({
                calories,
                fat,
                carbs,
                protein,
              })
            );
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, isSubmitting, errors }) => (
          <Form>
            <MyNumberInput label="Calories" name="calories" placeholder={0} />
            <MyNumberInput label="Fat" name="fat" placeholder={0} />
            <MyNumberInput label="Carbs" name="carbs" placeholder={0} />
            <MyNumberInput label="Protein" name="protein" placeholder={0} />
            <Button
              type="submit"
              disabled={isSubmitting || Object.keys(errors).length > 0}
            >
              Submit
            </Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    );
  };
