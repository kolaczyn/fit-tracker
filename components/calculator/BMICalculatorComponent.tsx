import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { NumberInputWrapper } from '../form/NumberInputWrapper';
import { BMICalculatorData } from '../../customTypes';
import { Button, Text } from '@chakra-ui/react';
import calculateBMI from '../../utils/calculateBMI';
import { useDispatch } from 'react-redux';
import { updateMetrics } from '../../redux/metricsSlice';
import { useAppDispatch } from '../../redux/hooks';

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
    const dispatch = useAppDispatch();

    const [bmi, setBmi] = useState<number>(69);
    const roundedBmi = bmi.toFixed(2);

    return (
      <Formik
        validationSchema={validationSchema}
        initialValues={initialFormState}
        onSubmit={({ height, weight }: BMICalculatorData<string>) => {
          const numWeight = Number(weight);
          const numHeight = Number(height);
          setBmi(calculateBMI(numWeight, numHeight));
          dispatch(updateMetrics({ weight: numWeight, height: numHeight }));
        }}
      >
        {() => (
          <Form>
            <NumberInputWrapper label="Height" name="height" placeholder={0} />
            <NumberInputWrapper label="Weight" name="weight" placeholder={0} />
            <Text>You BMI is: {roundedBmi}</Text>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    );
  };
