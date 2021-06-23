import { Divider } from '@chakra-ui/react';
import React from 'react';
import * as Yup from 'yup';
import { NutrientsI } from '../../customTypes';
import Nutrients from '../../models/Nutrients';
import { useAppDispatch } from '../../redux/hooks';
import { addToFoodList } from '../../redux/trackIntakeSlice';
import stringValuesToNums from '../../utils/mappers/stringValuesToNums';
import { FormModal } from '../form/FormModal';
import { InputWrapper } from '../form/InputWrapper';

type FormState = {
  name: string;
  category: string;
  portion: string;
  nutrients: NutrientsI<string>;
};

const validationSchema = Yup.object({
  name: Yup.string().min(1).required(),
  category: Yup.string().min(1),
  portion: Yup.number().min(0),
  nutrients: Nutrients.yupValidationSchema(false),
});

const initialFormState: FormState = {
  name: '',
  category: '',
  portion: '',
  nutrients: Nutrients.initialFormState(),
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
            addToFoodList({
              ...data,
              nutrients: stringValuesToNums(data.nutrients),
              portion: Number(data.portion),
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
      <Divider my="5" />
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
