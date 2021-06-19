import { Accordion } from '@chakra-ui/accordion';
import {
  AccordionButton,

  AccordionIcon, AccordionItem,



  AccordionPanel, Box
} from '@chakra-ui/react';
import React from 'react';

export const GenderFAQ: React.FC = ({}) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box textColor="gray.400" flex="1" textAlign="left">
              Why are you asking for my gender?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p>
            Men have more muscles than women, they both have a different body
            structure, which changes the way burn fat.
          </p>
          <p>
            Because of this, the formulas for <em>Body Fat</em> and{' '}
            <em>TDEE</em> are quite different and the former needs quite a few
            more measurements for women.
            <p>BMI calculation for men and women is the same.</p>
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
