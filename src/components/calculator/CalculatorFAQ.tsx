import { Accordion } from '@chakra-ui/accordion';
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import React from 'react';

export const CalculatorFAQ: React.FC = ({}) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <AccordionButton>
          <Box as="h2" textColor="gray.500" flex="1" textAlign="left">
            Why are you asking for my gender?
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <p>
            Men have more muscles than women, they both have a different body
            structure, which changes the way burn fat.
          </p>
          <p>
            Because of this, the formulas for <em>Body Fat</em> and{' '}
            <em>TDEE</em> are quite different and the former needs quite a few
            more measurements for women.
          </p>
          <p>BMI calculation for men and women is the same.</p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box as="h2" textColor="gray.500" flex="1" textAlign="left">
            Why are there no other genders, like FtM or MtF?
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <p>
            I don't know if there are well defined transgender formulas and I'm
            assuming that it also depends on the person, what stage are they on,
            etc.
          </p>
          <p>
            If you're transgender, your Body Fat% and
            TDEE values should be somewhere in between male and female.
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
