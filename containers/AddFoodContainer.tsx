import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { ModalFooter, Button, Divider } from '@chakra-ui/react';
import { Form, Formik, } from 'formik';
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
    calories: Yup.number().min(0).required("Calories is a required field"),
    fat: Yup.number().min(0).required("Fat is a required field"),
    carbs: Yup.number().min(0).required("Carbs is a required field"),
    protein: Yup.number().min(0).required("Protein is a required field"),
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
        <ModalBody>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialFormState}
            onSubmit={(data: FormState) => {
              alert(JSON.stringify(data, null, 2));
            }}
          >
            {({values}) => (
              <Form>
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
                <Button type="submit">Submit</Button>
                {<pre>{JSON.stringify(values, null ,2)}</pre>}
              </Form>
            )}
          </Formik>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green">Add Food</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
