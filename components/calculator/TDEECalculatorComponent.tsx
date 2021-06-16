import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import React from 'react';
import { TDEECalculatorForMenComponent } from './TDEECalculatorForMenComponent';
import { TDEECalculatorForWomen } from './TDEECalculatorForWomenComponent';

interface TDEECalculatorComponentProps {}

export const TDEECalculatorComponent: React.FC<TDEECalculatorComponentProps> =
  ({}) => {
    return (
      <Tabs>
        <TabList>
          <Tab>For Men</Tab>
          <Tab>For Women</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TDEECalculatorForMenComponent />
          </TabPanel>
          <TabPanel>
            <TDEECalculatorForWomen />
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  };
