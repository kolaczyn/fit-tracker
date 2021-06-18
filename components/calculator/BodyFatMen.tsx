import { VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { calculateBodyFatForMen } from '../../utils/calculateBodyFat';
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

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialFormState}
      onSubmit={({ weight, waist }: FormState) => {
        setBodyFat(calculateBodyFatForMen(Number(weight), Number(waist)));
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
              label="Waist"
              name="waist"
              placeholder={0}
              unit="inches"
            />
            <SubmitAndResult
              value={bodyFat}
              text="Your body fat percentage is"
            />
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
