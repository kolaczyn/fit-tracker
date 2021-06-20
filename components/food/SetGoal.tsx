import { Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { InputWrapper } from '../form/InputWrapper';
import { Nutrients } from '../../customTypes';
import { useAppDispatch } from '../../redux/hooks';
import { setIntakeGoal } from '../../redux/trackIntakeSlice';
import stringValuesToNums from '../../utils/stringValuesToNums';
import { FormModal } from '../form/FormModal';

const validationSchema = Yup.object({
  calories: Yup.number().min(0).required('Calories is a required field'),
  fat: Yup.number().min(0).required('Fat is a required field'),
  carbs: Yup.number().min(0).required('Carbs is a required field'),
  protein: Yup.number().min(0).required('Protein is a required field'),
});

type FormState = Nutrients<string>;

const initialFormState: FormState = {
  calories: '',
  fat: '',
  carbs: '',
  protein: '',
};

export const SetGoal: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  return (
    <FormModal
      title="Change Goal"
      buttonLabel="Change Goal"
      formikProps={{
        initialValues: initialFormState,
        validationSchema,
        // @ts-ignore
        onSubmit(data: FormState) {
          dispatch(setIntakeGoal(stringValuesToNums(data)));
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
