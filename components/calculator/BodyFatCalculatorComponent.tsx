import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react';
import { BodyFatCalculatorForMenComponent } from './BodyFatCalculatorForMenComponent';

interface BodyFatCalculatorComponentProps {}

export const BodyFatCalculatorComponent: React.FC<BodyFatCalculatorComponentProps> =
  ({}) => {
    return (
      <Tabs>
        <TabList>
          <Tab>For Men</Tab>
          <Tab>For Women</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <BodyFatCalculatorForMenComponent />
          </TabPanel>
          <TabPanel>TODO</TabPanel>
        </TabPanels>
      </Tabs>
    );
  };
