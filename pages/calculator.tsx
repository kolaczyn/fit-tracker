import { TabList, Tab, TabPanel } from '@chakra-ui/react';
import { TabPanels, Tabs } from '@chakra-ui/tabs';
import React from 'react';
import { BMICalculatorComponent } from '../components/calculator/BMICalculatorComponent';

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
        <TabPanel>Body Fat Calculator</TabPanel>
        <TabPanel>TDEE Calculator</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Calculator;
