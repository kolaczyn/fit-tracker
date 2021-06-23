import { Flex, Heading, Spacer, Text } from '@chakra-ui/layout';
import { NextSeo } from 'next-seo';
import React from 'react';

export const Custom404: React.FC = ({}) => {
  return (
    <>
      <NextSeo title="404 Page Not Found | Track Fit" description="404 Page Not Found"/>
      <Heading as="h1">404 - Page Not Found</Heading>
    </>
  );
};
export default Custom404;
