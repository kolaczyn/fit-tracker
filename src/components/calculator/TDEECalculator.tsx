import { PhoneIcon, QuestionOutlineIcon } from '@chakra-ui/icons';
import {
  Box,
  FormLabel,
  Grid,
  HStack,
  Radio,
  RadioGroup,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';
import * as Yup from 'yup';

import { ActivityLevel, TDEECalculatorData } from '../../customTypes';
import { useAppSelector } from '../../redux/hooks';
import {
  calculateTDEEForFemale,
  calculateTDEEForMale,
} from '../../utils/calculateTDEE';
import isMale from '../../utils/isMale';
import stringValuesToNums from '../../utils/stringValuesToNums';
import { InputWrapper } from '../form/InputWrapper';
import { RadioWithTooltip } from '../form/RadioWithTooltip';
import { RadioWrapper } from '../form/RadioWrapper';
import { SubmitAndResult } from '../form/SubmitAndResult';

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
    <>
      <NextSeo title="TDEE Calculator | Track Fit" />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialFormState}
        onSubmit={({
          activityLevel,
          ...restData
        }: TDEECalculatorData<string>) => {
          const calcFunc = isMale(gender)
            ? calculateTDEEForMale
            : calculateTDEEForFemale;
          const {
            weight: weightInKg,
            height: heightInCm,
            age,
          } = stringValuesToNums(restData);
          setUserTDEE(calcFunc({ weightInKg, heightInCm, age, activityLevel }));
        }}
      >
        {() => (
          <Form>
            <VStack spacing={4} alignItems="stretch">
              <RadioGroup>
                <FormLabel>Activity Level</FormLabel>
                <Grid
                  templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                  gap={1}
                  justifyItems="start"
                >
                  <RadioWithTooltip
                    label="Sendetary"
                    name="activityLevel"
                    value={ActivityLevel.Sendetary}
                    tooltipText="Little or no exercise, desk job"
                  />

                  <RadioWithTooltip
                    label="Lightly Active"
                    name="activityLevel"
                    value={ActivityLevel.LightlyActive}
                    tooltipText="Light exercise, sports 1 to 3 days/week"
                  />

                  <RadioWithTooltip
                    label="Moderate Active"
                    name="activityLevel"
                    value={ActivityLevel.ModerateActive}
                    tooltipText="Moderate exercise, sports 3 to 5 days/week"
                  />

                  <RadioWithTooltip
                    label="Very Active"
                    name="activityLevel"
                    value={ActivityLevel.VeryActive}
                    tooltipText="Heavy exercise, sports 6 to 7 days/week"
                    placement="bottom"
                  />

                  <RadioWithTooltip
                    label="Extremely Active"
                    name="activityLevel"
                    value={ActivityLevel.ExtremelyActive}
                    tooltipText="Exercise, sports several times a day"
                    placement="bottom"
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
              <InputWrapper
                label="Age"
                name="age"
                placeholder={0}
                unit="years"
              />
              <SubmitAndResult value={userTDEE} text="Your TDEE is" />
            </VStack>
          </Form>
        )}
      </Formik>
    </>
  );
};
