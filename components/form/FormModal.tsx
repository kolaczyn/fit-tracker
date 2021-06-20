import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';

type FormModalProps = {
  title: string;
  buttonLabel: string;
} & any;

// (alias) function Formik<Values extends FormikValues = FormikValues, ExtraProps = {}>(props: FormikConfig<Values> & ExtraProps): JSX.Element

export const FormModal: React.FC<FormModalProps> = ({
  title,
  buttonLabel,
  children,
  ...formikProps
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{buttonLabel}</Button>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <Formik {...formikProps}>
            {() => (
              <>
                <Form>
                  <ModalBody>{children}</ModalBody>
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
    </>
  );
};
