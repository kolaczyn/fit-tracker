import { TabList, Tab, TabPanel } from '@chakra-ui/react';
import { TabPanels, Tabs } from '@chakra-ui/tabs';
import React from 'react';
import { BMICalculatorComponent } from '../components/calculator/BMICalculatorComponent';
import { BodyFatCalculatorComponent } from '../components/calculator/BodyFatCalculatorComponent';
import { TDEECalculatorComponent } from '../components/calculator/TDEECalculatorComponent';
import { GenderSelector } from '../components/form/GenderSelector';
import { useAppSelector } from '../redux/hooks';

interface CalculatorProps {}

export const Calculator: React.FC<CalculatorProps> = ({}) => {
  const metrics = useAppSelector(state => state.metrics);
  return (
    <>
      <GenderSelector />
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
    </>
  );
};
export default Calculator;
