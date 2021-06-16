import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { ModalFooter, Button, Divider } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { InputWrapper } from '../components/form/InputWrapper';
import { Nutrients } from '../customTypes';

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

interface AddFoodContainerProps {
  isOpen: boolean;
  onClose: () => {};
}

export const AddFoodContainer: React.FC<AddFoodContainerProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Food</ModalHeader>
        <ModalCloseButton />
        <Formik
          validationSchema={validationSchema}
          initialValues={initialFormState}
          onSubmit={(data: FormState) => {
            alert(JSON.stringify(data, null, 2));
          }}
        >
          {() => (
            <>
              <Form>
                <ModalBody>
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
                  <InputWrapper
                    label="Fat"
                    name="nutrients.fat"
                    placeholder={0}
                    unit="g"
                  />
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
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="green" type="submit">
                    Add Food
                  </Button>
                </ModalFooter>
              </Form>
            </>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};
