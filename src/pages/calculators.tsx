import { TabList, Tab, TabPanel } from '@chakra-ui/react';
import { TabPanels, Tabs } from '@chakra-ui/tabs';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { BMICalculator } from '../components/calculator/BMICalculator';
import { BodyFatMen } from '../components/calculator/BodyFatMen';
import { BodyFatWomen } from '../components/calculator/BodyFatWomen';
import { TDEECalculator } from '../components/calculator/TDEECalculator';
import { GenderSelector } from '../components/form/GenderSelector';
import { GenderDependent } from '../components/render/GenderDependent';
import { AppBox } from '../components/ui/AppBox';

interface CalculatorProps {}
export const Calculator: React.FC<CalculatorProps> = ({}) => {
  const [tabIndex, setTabIndex] = useState(0);
  const loremIpsum = () => {
    const hash = window.location.hash;
    if (hash === '#body-fat') {
      setTabIndex(1);
    } else if (hash === '#tdee') {
      setTabIndex(2);
    }
    console.log('hello world!');
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
      <NextSeo title="Calculator | Track Fit" />
      <AppBox>
        <GenderSelector />
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
      </AppBox>
    </>
  );
};
export default Calculator;
