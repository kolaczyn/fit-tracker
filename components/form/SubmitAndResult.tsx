import { Button, HStack, Text } from '@chakra-ui/react';
import React from 'react';

interface SubmitAndResultProps {
  value: number | null;
  text: string;
}

const calculateRoundedValue = (value: number) => value.toFixed(2);

export const SubmitAndResult: React.FC<SubmitAndResultProps> = ({
  value,
  text,
}) => {
  return (
    <HStack justify="space-between">
      <Button type="submit" colorScheme="cyan">
        Calculate
      </Button>
      {value ? (
        <Text>
          {text}: {calculateRoundedValue(value)}
        </Text>
      ) : null}
    </HStack>
  );
};
