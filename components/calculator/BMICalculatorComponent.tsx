import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { NumberInputWrapper } from '../form/NumberInputWrapper';
import { BMICalculatorData } from '../../customTypes';
import { Button, Text } from '@chakra-ui/react';
import calculateBMI from '../../utils/calculateBMI';

interface BMICalculatorComponentProps {}

const validationSchema = Yup.object({
  height: Yup.number().min(0).required(),
  weight: Yup.number().min(0).required(),
});

const initialFormState: BMICalculatorData<string> = {
  height: '',
  weight: '',
};

export const BMICalculatorComponent: React.FC<BMICalculatorComponentProps> =
  ({}) => {
    const [bmi, setBmi] = useState<number>(69);
    const roundedBmi = bmi.toFixed(2);

    return (
      <Formik
        validationSchema={validationSchema}
        initialValues={initialFormState}
        onSubmit={({ height, weight }: BMICalculatorData<string>) => {
          setBmi(calculateBMI(Number(weight), Number(height)));
        }}
      >
        {() => (
          <Form>
            <NumberInputWrapper label="Height" name="height" placeholder={0} />
            <NumberInputWrapper label="Weight" name="weight" placeholder={0} />
            <Text>You BMI is: {roundedBmi}</Text>
            <Button
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    );
  };
