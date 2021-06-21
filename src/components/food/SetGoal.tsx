import React from 'react';
import { InputWrapper } from '../form/InputWrapper';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setIntakeGoal } from '../../redux/trackIntakeSlice';
import { FormModal } from '../form/FormModal';
import Nutrients from '../../models/Nutrients';
import { NutrientsI } from '../../customTypes';
import { VStack } from '@chakra-ui/layout';

const validationSchema = Nutrients.yupValidationSchema();

const initialFormState = Nutrients.initialFormState();

export const SetGoal: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const currentGoals: NutrientsI<number> = useAppSelector(
    state => state.trackIntake.intakeGoal
  );
  return (
    <FormModal
      title="Change Goal"
      buttonLabel="Change Goal"
      formikProps={{
        initialValues: currentGoals,
        validationSchema,
        onSubmit(data) {
          // @ts-ignore
          dispatch(setIntakeGoal(Nutrients.newNutrientsFromString(data)));
        },
      }}
    >
      <VStack>
        <InputWrapper
          label="Calores"
          name="calories"
          placeholder={0}
          unit="Calories"
        />
        <InputWrapper label="Fat" name="fat" placeholder={0} unit="g" />
        <InputWrapper label="Carbs" name="carbs" placeholder={0} unit="g" />
        <InputWrapper label="Protein" name="protein" placeholder={0} unit="g" />
      </VStack>
    </FormModal>
  );
};
