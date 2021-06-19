import { TabList, Tab, TabPanel } from '@chakra-ui/react';
import { TabPanels, Tabs } from '@chakra-ui/tabs';
import { NextSeo } from 'next-seo';
import React from 'react';

import { BMICalculator } from '../components/calculator/BMICalculator';
import { BodyFatMen } from '../components/calculator/BodyFatMen';
import { BodyFatWomen } from '../components/calculator/BodyFatWomen';
import { TDEECalculator } from '../components/calculator/TDEECalculator';
import { GenderSelector } from '../components/form/GenderSelector';
import { GenderDependent } from '../components/render/GenderDependent';

interface CalculatorProps {}

export const Calculator: React.FC<CalculatorProps> = ({}) => {
  return (
    <>
      <NextSeo title="Calculator | Track Fit" />
      <GenderSelector />
      <Tabs>
        <TabList>
          <Tab>BMI Calculator</Tab>
          <Tab>Body Fat Calculator</Tab>
          <Tab>TDEE Calculator</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <BMICalculator />
          </TabPanel>
          <TabPanel>
            <GenderDependent
              MaleComponent={BodyFatMen}
              FemaleComponent={BodyFatWomen}
            />
          </TabPanel>
          <TabPanel>
            <TDEECalculator />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
export default Calculator;
