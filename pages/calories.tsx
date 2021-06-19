import { NextSeo } from 'next-seo';
import React from 'react';

interface CaloriesProps {}

const Calories: React.FC<CaloriesProps> = ({}) => {
  return (
    <>
      <NextSeo title="Track Your Calories | Track Fit" />
      <h2>Calories</h2>
    </>
  );
};

export default Calories;
