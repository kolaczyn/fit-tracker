import { Divider } from '@chakra-ui/react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import { Nutrients } from '../../customTypes';
import { useAppDispatch } from '../../redux/hooks';
import { addtoFoodList } from '../../redux/trackIntakeSlice';
import stringValuesToNums from '../../utils/stringValuesToNums';
import { FormModal } from '../form/FormModal';
import { InputWrapper } from '../form/InputWrapper';

type FormState = {
  name: string;
  category: string;
  portion: string;
  nutrients: Nutrients<string>;
};

const validationSchema = Yup.object({
  name: Yup.string().min(1).required(),
  category: Yup.string().min(1),
  portion: Yup.number().min(0).required(),
  nutrients: Yup.object({
    calories: Yup.number().min(0).required('Calories is a required field'),
    fat: Yup.number().min(0).required('Fat is a required field'),
    carbs: Yup.number().min(0).required('Carbs is a required field'),
    protein: Yup.number().min(0).required('Protein is a required field'),
  }),
});

const initialFormState: FormState = {
  name: '',
  category: '',
  portion: '',
  nutrients: {
    calories: '',
    fat: '',
    carbs: '',
    protein: '',
  },
};

export const AddFood: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <FormModal
      title="Add Food"
      buttonLabel="Add Food"
      formikProps={{
        validationSchema,
        initialValues: initialFormState,
        // @ts-ignore
        onSubmit(data: FormState) {
          // TODO this is so fucking ugly, I can't even
          dispatch(
            addtoFoodList({
              ...data,
              nutrients: stringValuesToNums(data.nutrients),
              portion: Number(data.portion),
              id: uuidv4(),
            })
          );
        },
      }}
    >
      <InputWrapper
        label="Name"
        name="name"
        placeholder="Food's name"
        type="text"
      />
      {/* TODO make this a dropdown menu */}
      <InputWrapper
        label="Category"
        name="category"
        placeholder="Category's name"
        type="text"
      />
      <InputWrapper
        label="Portion"
        name="portion"
        placeholder={0}
        // TODO in the future make the unit dynamic, base on another field - Unit
        // It may look a little bit weird, we'll see
        unit="g"
      />
      <Divider my="2" />
      <InputWrapper
        label="Calores"
        name="nutrients.calories"
        placeholder={0}
        unit="Calories"
      />
      <InputWrapper label="Fat" name="nutrients.fat" placeholder={0} unit="g" />
      <InputWrapper
        label="Carbs"
        name="nutrients.carbs"
        placeholder={0}
        unit="g"
      />
      <InputWrapper
        label="Protein"
        name="nutrients.protein"
        placeholder={0}
        unit="g"
      />
    </FormModal>
  );
};