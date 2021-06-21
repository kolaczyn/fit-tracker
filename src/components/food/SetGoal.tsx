import React from 'react';
import { InputWrapper } from '../form/InputWrapper';
import { useAppDispatch } from '../../redux/hooks';
import { setIntakeGoal } from '../../redux/trackIntakeSlice';
import { FormModal } from '../form/FormModal';
import Nutrients from '../../models/Nutrients';

const validationSchema = Nutrients.yupValidationSchema();

const initialFormState = Nutrients.initialFormState();

export const SetGoal: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  return (
    <FormModal
      title="Change Goal"
      buttonLabel="Change Goal"
      formikProps={{
        initialValues: initialFormState,
        validationSchema,
        onSubmit(data) {
          // @ts-ignore
          dispatch(setIntakeGoal(Nutrients.newNutrientsFromString(data)));
        },
      }}
    >
      <InputWrapper
        label="Calores"
        name="calories"
        placeholder={0}
        unit="Calories"
      />
      <InputWrapper label="Fat" name="fat" placeholder={0} unit="g" />
      <InputWrapper label="Carbs" name="carbs" placeholder={0} unit="g" />
      <InputWrapper label="Protein" name="protein" placeholder={0} unit="g" />
    </FormModal>
  );
};
