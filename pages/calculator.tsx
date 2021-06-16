import { TabList, Tab, TabPanel } from '@chakra-ui/react';
import { TabPanels, Tabs } from '@chakra-ui/tabs';
import React from 'react';

import { BMICalculator } from '../components/calculator/BMICalculator';
import { BodyFatMen } from '../components/calculator/BodyFatMen';
import { TDEEMen } from '../components/calculator/TDEEMen';
import { TDEECalculatorForWomen } from '../components/calculator/TDEEWomen';
import { GenderSelector } from '../components/form/GenderSelector';
import { GenderDependentContainer } from '../containers/GenderDependentContainer';

// I don't have a Female calculator, and I need to pass in a component
// so for now it's the easier to create a throway component
const ThrowawayBodyFatFemale: React.FC = () => <section>TODO</section>;

interface CalculatorProps {}

export const Calculator: React.FC<CalculatorProps> = ({}) => {
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
            <BMICalculator />
          </TabPanel>
          <TabPanel>
            <GenderDependentContainer
              MaleComponent={BodyFatMen}
              FemaleComponent={ThrowawayBodyFatFemale}
            />
          </TabPanel>
          <TabPanel>
            <GenderDependentContainer
              MaleComponent={TDEEMen}
              FemaleComponent={TDEECalculatorForWomen}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
export default Calculator;
