import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { NumberInputWrapper } from '../form/NumberInputWrapper';
import { BMICalculatorData } from '../../customTypes';
import { Button, Text } from '@chakra-ui/react';
import calculateBMI from '../../utils/calculateBMI';
import { calculateBodyFatForMen } from '../../utils/calculateBodyFat';

interface BodyFatCalculatorForMenComponentProps {}
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

// I regret including the word 'Component' in the class names
export const BodyFatCalculatorForMenComponent: React.FC<BodyFatCalculatorForMenComponentProps> =
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
        {({ isSubmitting, errors }) => (
          <Form>
            <NumberInputWrapper label="Weight in pounds" name="weight" placeholder={0} />
            <NumberInputWrapper label="Waist in football fields" name="waist" placeholder={0} />
            <Text>Body fat percentage: {roundedBodyFat}%</Text>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    );
  };
