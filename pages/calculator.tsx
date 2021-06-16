import { TabList, Tab, TabPanel } from '@chakra-ui/react';
import { TabPanels, Tabs } from '@chakra-ui/tabs';
import React from 'react';
import { BMICalculatorComponent } from '../components/calculator/BMICalculatorComponent';
import { BodyFatCalculatorComponent } from '../components/calculator/BodyFatCalculatorComponent';
import { TDEECalculatorComponent } from '../components/calculator/TDEECalculatorComponent';

interface CalculatorProps {}

export const Calculator: React.FC<CalculatorProps> = ({}) => {
  return (
    <Tabs>
      <TabList>
        <Tab>BMI Calculator</Tab>
        <Tab>Body Fat Calculator</Tab>
        <Tab>TDEE Calculator</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <BMICalculatorComponent />
        </TabPanel>
        <TabPanel>
          <BodyFatCalculatorComponent />
        </TabPanel>
        <TabPanel>
          <TDEECalculatorComponent />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Calculator;
