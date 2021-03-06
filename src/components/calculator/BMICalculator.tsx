import { VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { BMICalculatorData } from '../../customTypes';
import useCalcFunctions from '../../hooks/useCalcFunctions';
import useUnits from '../../hooks/useUnits';
import { useAppDispatch } from '../../redux/hooks';
import { updateMetrics } from '../../redux/metricsSlice';
import stringValuesToNums from '../../utils/mappers/stringValuesToNums';
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
  const { weightUnit, lengthUnit } = useUnits();
  const { bmiCalc } = useCalcFunctions();

  const [bmi, setBmi] = useState<number | null>(null);

  return (
    <>
      <NextSeo title="BMI Calculator | Track Fit" />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialFormState}
        onSubmit={(formState: BMICalculatorData<string>) => {
          const formStateNums = stringValuesToNums(formState);
          setBmi(bmiCalc(formStateNums));
          dispatch(updateMetrics(formStateNums));
        }}
      >
        {() => (
          <Form>
            <VStack spacing={4} alignItems="flex-start">
              <InputWrapper
                label="Height"
                name="height"
                placeholder={0}
                unit={lengthUnit}
              />
              <InputWrapper
                label="Weight"
                name="weight"
                placeholder={0}
                unit={weightUnit}
              />
              <SubmitAndResult value={bmi} text="Your BMI is" />
            </VStack>
          </Form>
        )}
      </Formik>
    </>
  );
};
