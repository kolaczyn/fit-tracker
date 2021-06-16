import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Flex,
  FormLabel,
  Grid,
  HStack,
  RadioGroup,
  Text,
  VStack,
} from '@chakra-ui/react';

import { InputWrapper } from '../form/InputWrapper';
import {
  calculateTDEEForFemale,
  calculateTDEEForMale,
} from '../../utils/calculateTDEE';
import { ActivityLevel, TDEECalculatorData } from '../../customTypes';
import { RadioWrapper } from '../form/RadioWrapper';
import { useAppSelector } from '../../redux/hooks';
import isMale from '../../utils/isMale';
import { SubmitAndResult } from '../form/SubmitAndResult';
import { useRouter } from 'next/dist/client/router';

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
  const [userTDEE, setUserTDEE] = useState<number | null>(null);
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
          <VStack spacing={4} alignItems="stretch">
            <RadioGroup>
              <FormLabel>Activity Level</FormLabel>
              <Grid templateColumns="repeat(3, 1fr)" gap={1.5}>
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
              </Grid>
            </RadioGroup>
            <InputWrapper
              label="Weight"
              name="weight"
              placeholder={0}
              unit="kg"
            />
            <InputWrapper
              label="Height"
              name="height"
              placeholder={0}
              unit="cm"
            />
            <InputWrapper label="Age" name="age" placeholder={0} unit="years" />
            <SubmitAndResult value={userTDEE} text="Your TDEE is" />
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
