import { VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { BMICalculatorData } from '../../customTypes';
import { useAppDispatch } from '../../redux/hooks';
import { updateMetrics } from '../../redux/metricsSlice';
import calculateBMI from '../../utils/calculateBMI';
import { InputWrapper } from '../form/InputWrapper';
import { SubmitAndResult } from '../form/SubmitAndResult';


interface BMICalculatorProps {}

const validationSchema = Yup.object({
  height: Yup.number().min(0).required(),
  weight: Yup.number().min(0).required(),
});

const initialFormState: BMICalculatorData<string> = {
  height: '',
  weight: '',
};

export const BMICalculator: React.FC<BMICalculatorProps> = ({}) => {
  const dispatch = useAppDispatch();

  const [bmi, setBmi] = useState<number | null>(null);

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
          <VStack spacing={4} alignItems="stretch">
            <InputWrapper
              label="Height"
              name="height"
              placeholder={0}
              unit="cm"
            />
            <InputWrapper
              label="Weight"
              name="weight"
              placeholder={0}
              unit="kg"
            />
            <SubmitAndResult value={bmi} text="Your BMI is:" />
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
