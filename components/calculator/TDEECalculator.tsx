import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, FormLabel, RadioGroup, Text } from '@chakra-ui/react';

import { NumberInputWrapper } from '../form/NumberInputWrapper';
import {
  calculateTDEEForFemale,
  calculateTDEEForMale,
} from '../../utils/calculateTDEE';
import { ActivityLevel, TDEECalculatorData } from '../../customTypes';
import { RadioWrapper } from '../form/RadioWrapper';
import { useAppSelector } from '../../redux/hooks';
import isMale from '../../utils/isMale';

const validationSchema = Yup.object({
  weight: Yup.number().min(0).required(),
  height: Yup.number().min(0).required(),
  age: Yup.number().min(0).required(),
});

const initialFormState: TDEECalculatorData<string> = {
  activityLevel: ActivityLevel.Sendetary,
  weight: '',
  height: '',
  age: '',
};

interface TDEECalculatorProps {}
export const TDEECalculator: React.FC<TDEECalculatorProps> = ({}) => {
  const gender = useAppSelector(data => data.metrics.gender);
  const [userTDEE, setUserTDEE] = useState<number>(100);
  const roundedTDEE = userTDEE.toFixed(2);
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialFormState}
      onSubmit={({
        activityLevel,
        weight,
        height,
        age,
      }: TDEECalculatorData<string>) => {
        setUserTDEE(
          // TODO I don't like the duplication in here, might do something about this later
          isMale(gender)
            ? calculateTDEEForMale(
                activityLevel,
                Number(weight),
                Number(height),
                Number(age)
              )
            : calculateTDEEForFemale(
                activityLevel,
                Number(weight),
                Number(height),
                Number(age)
              )
        );
      }}
    >
      {() => (
        <Form>
          <RadioGroup>
            <FormLabel>Activity Level</FormLabel>
            <RadioWrapper
              label="Sendetary"
              name="activityLevel"
              value={ActivityLevel.Sendetary}
            />
            <RadioWrapper
              label="Lightly Active"
              name="activityLevel"
              value={ActivityLevel.LightlyActive}
            />
            <RadioWrapper
              label="Moderate Active"
              name="activityLevel"
              value={ActivityLevel.ModerateActive}
            />
            <RadioWrapper
              label="Very Active"
              name="activityLevel"
              value={ActivityLevel.VeryActive}
            />
            <RadioWrapper
              label="Extremely Active"
              name="activityLevel"
              value={ActivityLevel.ExtremelyActive}
            />
          </RadioGroup>
          <NumberInputWrapper
            label="Weight"
            name="weight"
            placeholder={0}
            unit="kg"
          />
          <NumberInputWrapper
            label="Height"
            name="height"
            placeholder={0}
            unit="cm"
          />
          <NumberInputWrapper
            label="Age"
            name="age"
            placeholder={0}
            unit="years"
          />
          <Text>Your TDEE is: {roundedTDEE} Calories</Text>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};
