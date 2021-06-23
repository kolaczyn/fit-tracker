import { VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';
import * as Yup from 'yup';
import useCalcFunctions from '../../hooks/useCalcFunctions';
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
  const { bodyFatCalc } = useCalcFunctions();

  return (
    <>
      <NextSeo title="Body Fat Calculator | Track Fit" />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialFormState}
        onSubmit={(formState: FormState) => {
          // setBodyFat(calculateBodyFatForMen(Number(weight), Number(waist)));
          const valuesAsNumbers = stringValuesToNums(formState);
          // I'm not sure why TypeScript doesn't allow me to let me pass male version of the props
          // @ts-ignore
          const bodyFat = bodyFatCalc(valuesAsNumbers);
          setBodyFat(bodyFat);
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
