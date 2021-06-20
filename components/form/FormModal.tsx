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
import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import React from 'react';

type Temp<Values extends FormikValues = FormikValues, ExtraProps = {}> =
  FormikConfig<Values> & ExtraProps;

type PropTypes = {
  title: string;
  buttonLabel: string;
  formikProps: Temp;
};

export const FormModal: React.FC<PropTypes> = ({
  title,
  buttonLabel,
  children,
  formikProps,
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
                      {buttonLabel}
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
