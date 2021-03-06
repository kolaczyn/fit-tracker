import {
  TabList,
  Tab,
  TabPanel,
  VStack,
  Heading,
  Text,
  Grid,
  Box,
  Divider,
  Flex,
} from '@chakra-ui/react';
import { TabPanels, Tabs } from '@chakra-ui/tabs';
import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';

const tabIndexToTabName: Record<number, string> = {
  0: 'BMI Calculator',
  1: 'Body Fat Calculator',
  2: 'TDEE Calculator',
};

import { BMICalculator } from '../components/calculator/BMICalculator';
import { BMIResultCard } from '../components/calculator/BMIResultCard';
import { BodyFatMen } from '../components/calculator/BodyFatMen';
import { BodyFatWomen } from '../components/calculator/BodyFatWomen';
import { CalculatorFAQ } from '../components/calculator/CalculatorFAQ';
import { TDEECalculator } from '../components/calculator/TDEECalculator';
import { UnitsSelector } from '../components/calculator/UnitsSelector';
import { GenderSelector } from '../components/form/GenderSelector';
import { GenderDependent } from '../components/render/GenderDependent';
import { CardWithHeader } from '../components/ui/CardWithHeader';
import { useAppSelector } from '../redux/hooks';
import calculateBMIStatsMetric from '../utils/calculator/bmiToStats';

interface CalculatorProps {}
export const Calculator: React.FC<CalculatorProps> = ({}) => {
  const [tabIndex, setTabIndex] = useState(0);
  const metrics = useAppSelector(state => state.metrics);
  const condition = metrics.height && metrics.weight;
  let bmiStats;
  if (condition) {
    bmiStats = calculateBMIStatsMetric({
      height: metrics.height!,
      weight: metrics.weight!,
    });
  }
  const loremIpsum = () => {
    const hash = window.location.hash;
    if (hash === '#body-fat') {
      setTabIndex(1);
    } else if (hash === '#tdee') {
      setTabIndex(2);
    }
  };
  useEffect(() => {
    loremIpsum();
    window.addEventListener('hashchange', loremIpsum);
    return () => {
      window.removeEventListener('hashchange', loremIpsum);
    };
  }, []);
  const handleTabsChange = (idx: number) => {
    if (idx === 0) {
      window.location.hash = '#bmi';
    } else if (idx === 1) {
      window.location.hash = '#body-fat';
    } else if (idx === 2) {
      window.location.hash = '#tdee';
    }
    setTabIndex(idx);
  };
  return (
    <>
      <NextSeo
        title="Calculator | Track Fit"
        description="Calculate your BMI, Body Fat percentage and Total Daily Energy Expenditure"
      />
      <VStack alignItems="stretch" spacing={4}>
        <CardWithHeader title="Calculators">
          <Flex
            my={4}
            justifyContent="stretch"
            flexDirection={['column', 'column', 'column', 'row']}
          >
            <GenderSelector flexGrow={1} />
            <UnitsSelector flexGrow={1} />
          </Flex>
          <Tabs
            index={tabIndex}
            onChange={handleTabsChange}
            isLazy
            variant="enclosed"
            isFitted
          >
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
        </CardWithHeader>
        {condition ? (
          <CardWithHeader title={`${tabIndexToTabName[tabIndex]} Results`}>
            {
              {
                0: <BMIResultCard />,
                1: <h2>Body Fat Card</h2>,
                2: <h2>TDEE Card</h2>,
              }[tabIndex]
            }
          </CardWithHeader>
        ) : null}
        <CardWithHeader noDivider title="FAQ">
          <CalculatorFAQ />
        </CardWithHeader>
      </VStack>
    </>
  );
};
export default Calculator;
