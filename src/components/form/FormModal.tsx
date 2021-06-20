import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  Form,
  Formik,
  FormikConfig,
  FormikHelpers,
  FormikValues,
} from 'formik';
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
  const btnSize = useBreakpointValue(['sm', 'md']);
  const { onSubmit } = formikProps;
  const closeOnSubmit = (
    vals: FormikValues,
    helpers: FormikHelpers<FormikValues>
  ) => {
    onSubmit(vals, helpers);
    onClose();
  };
  return (
    <>
      <Button size={btnSize} onClick={onOpen}>
        {buttonLabel}
      </Button>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <Formik {...formikProps} onSubmit={closeOnSubmit}>
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
