import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Button } from '@chakra-ui/react';

import { Nutrients } from '../customTypes';
import { useAppDispatch } from '../redux/hooks';
import { addNutrients } from '../redux/nutrientsSlice';
import { InputWrapper } from '../components/form/InputWrapper';

interface NutrientsInputContainerProps {}

const validationSchema = Yup.object({
  calories: Yup.number().min(0).required(),
  fat: Yup.number().min(0).required(),
  carbs: Yup.number().min(0).required(),
  protein: Yup.number().min(0).required(),
});

const initialFormState: Nutrients<string> = {
  calories: '',
  fat: '',
  carbs: '',
  protein: '',
};

// TODO I should rename this to NutrientsFormContainerProps
export const NutrientsInputContainer: React.FC<NutrientsInputContainerProps> =
  ({}) => {
    const dispatch = useAppDispatch();

    return (
      <Formik
        validationSchema={validationSchema}
        initialValues={initialFormState}
        // onSubmit={formikHandleSubmit}
        onSubmit={(
          { calories, fat, carbs, protein }: Nutrients<string>,
          { setSubmitting }
        ) => {
          setTimeout(() => {
            dispatch(
              addNutrients({
                calories,
                fat,
                carbs,
                protein,
              })
            );
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <InputWrapper
              label="Calories"
              name="calories"
              placeholder={0}
            />
            <InputWrapper label="Fat" name="fat" placeholder={0} />
            <InputWrapper label="Carbs" name="carbs" placeholder={0} />
            <InputWrapper
              label="Protein"
              name="protein"
              placeholder={0}
            />
            <Button
              type="submit"
              disabled={isSubmitting || Object.keys(errors).length > 0}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    );
  };
