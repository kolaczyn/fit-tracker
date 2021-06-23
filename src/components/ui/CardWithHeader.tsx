import { Heading, Box } from '@chakra-ui/react';
import React from 'react';
import { AppBox } from './AppBox';

interface CardWithHeaderProps {
  title: string;
}

export const CardWithHeader: React.FC<CardWithHeaderProps> = ({
  title,
  children,
}) => {
  return (
    <AppBox>
      <Heading as="h2" fontSize="2xl">{title}</Heading>
      <Box marginY="2">
        <hr />
      </Box>
      <Box>{children}</Box>
    </AppBox>
  );
};
