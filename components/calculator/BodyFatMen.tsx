import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { NumberInputWrapper } from '../form/NumberInputWrapper';
import { Button, Text } from '@chakra-ui/react';
import { calculateBodyFatForMen } from '../../utils/calculateBodyFat';

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

export const BodyFatMen: React.FC<BodyFatMenProps> =
  ({}) => {
    const [bodyFat, setBodyFat] = useState<number>(420);
    const roundedBodyFat = bodyFat.toFixed(2);
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
            <NumberInputWrapper label="Weight" name="weight" placeholder={0} unit="pounds" />
            <NumberInputWrapper label="Waist" name="waist" placeholder={0} unit="inches" />
            <Text>Body fat percentage: {roundedBodyFat}%</Text>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    );
  };
