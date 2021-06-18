import { VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { calculateBodyFatForWomen } from '../../utils/calculateBodyFat';
// import * as Yup from 'yup';
import { InputWrapper } from '../form/InputWrapper';
import { SubmitAndResult } from '../form/SubmitAndResult';

interface BodyFatWomenProps {}

// const validationSchema = Yup.object({
//   weight: Yup.number().min(0).required(),
//   waist: Yup.number().min(0).required(),
// });

interface FormState {
  weight: string;
  wrist: string;
  hip: string;
  forearm: string;
  waist: string;
}

const initialFormState: FormState = {
  weight: '',
  wrist: '',
  hip: '',
  forearm: '',
  waist: '',
};

export const BodyFatWomen: React.FC<BodyFatWomenProps> = ({}) => {
  const [bodyFat, setBodyFat] = useState<number|null>(null);
  
  return (
    <Formik
      // TODO add validation schema and make it more generic so I can reuse it for all the other calculators
      // validationSchema={validationSchema}
      initialValues={initialFormState}
      onSubmit={({ weight, wrist, hip, forearm, waist }: FormState) => {
        const tempBodyFat = calculateBodyFatForWomen(
          // ...convertStringsToNums(
          Number(weight),
          Number(wrist),
          Number(hip),
          Number(forearm),
          Number(waist)
          // )
        );
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
              unit="pounds"
            />
            <InputWrapper
              label="Wrist"
              name="wrist"
              placeholder={0}
              unit="inches"
            />
            <InputWrapper
              label="Hip"
              name="hip"
              placeholder={0}
              unit="inches"
            />
            <InputWrapper
              label="Forearm"
              name="forearm"
              placeholder={0}
              unit="inches"
            />
            <InputWrapper
              label="Waist"
              name="waist"
              placeholder={0}
              unit="inches"
            />
            <SubmitAndResult value={bodyFat} text="Body fat percentage" />
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
