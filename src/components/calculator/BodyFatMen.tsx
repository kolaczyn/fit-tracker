import { VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';
import * as Yup from 'yup';
import useUnits from '../../hooks/useUnits';
import { calculateBodyFatForMenImperial } from '../../utils/calculateBodyFat';
import stringValuesToNums from '../../utils/stringValuesToNums';
import { InputWrapper } from '../form/InputWrapper';
import { SubmitAndResult } from '../form/SubmitAndResult';

interface BodyFatMenProps {}
const validationSchema = Yup.object({
  weight: Yup.number().min(0).required(),
  waist: Yup.number().min(0).required(),
});

interface FormState {
  weight: string;
  waist: string;
}

const initialFormState: FormState = {
  weight: '',
  waist: '',
};

export const BodyFatMen: React.FC<BodyFatMenProps> = ({}) => {
  const [bodyFat, setBodyFat] = useState<number | null>(null);
  const { weightUnit, lengthUnit } = useUnits();

  return (
    <>
      <NextSeo title="Body Fat Calculator | Track Fit" />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialFormState}
        onSubmit={(formState: FormState) => {
          // setBodyFat(calculateBodyFatForMen(Number(weight), Number(waist)));
          const { weight: weightInLb, waist: waistInInch } =
            stringValuesToNums(formState);
          // @ts-ignore
          const tempBodyFat = calculateBodyFatForMenImperial({
            weightInLb,
            waistInInch,
          });
          setBodyFat(tempBodyFat);
        }}
      >
        {() => (
          <Form>
            <VStack spacing={4} alignItems="stretch">
              <InputWrapper
                label="Weight"
                name="weight"
                placeholder={0}
                unit={weightUnit}
              />
              <InputWrapper
                label="Waist"
                name="waist"
                placeholder={0}
                unit={lengthUnit}
              />
              <SubmitAndResult
                value={bodyFat}
                text="Your body fat percentage is"
              />
            </VStack>
          </Form>
        )}
      </Formik>
    </>
  );
};
