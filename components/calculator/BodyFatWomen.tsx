import React, { useState } from 'react';
import { Form, Formik } from 'formik';
// import * as Yup from 'yup';

import { NumberInputWrapper } from '../form/NumberInputWrapper';
import { Button, Text } from '@chakra-ui/react';
import { calculateBodyFatForWomen } from '../../utils/calculateBodyFat';
import convertStringsToNums from '../../utils/convertStringsToNums';

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
  const [bodyFat, setBodyFat] = useState<number>(420);
  const roundedBodyFat = bodyFat.toFixed(2);
  return (
    <Formik
      // TODO add validation schema and make it more generic so I can reuse it for all the other calculators
      // validationSchema={validationSchema}
      initialValues={initialFormState}
      onSubmit={({ weight, wrist, hip, forearm, waist }: FormState) => {
        console.log(weight, wrist, hip, forearm, waist);
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
          <NumberInputWrapper
            label="Weight"
            name="weight"
            placeholder={0}
            unit="pounds"
          />
          <NumberInputWrapper
            label="Wrist"
            name="wrist"
            placeholder={0}
            unit="inches"
          />
          <NumberInputWrapper
            label="Hip"
            name="hip"
            placeholder={0}
            unit="inches"
          />
          <NumberInputWrapper
            label="Forearm"
            name="forearm"
            placeholder={0}
            unit="inches"
          />
          <NumberInputWrapper
            label="Waist"
            name="waist"
            placeholder={0}
            unit="inches"
          />
          <Text>Body fat percentage: {roundedBodyFat}%</Text>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};
