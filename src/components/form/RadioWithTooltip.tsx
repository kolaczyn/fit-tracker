import { QuestionOutlineIcon } from '@chakra-ui/icons';
import { Box, HStack, Text, Tooltip, VStack } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons/lib';
import { RadioWrapper } from './RadioWrapper';

type RadioWithTooltipProps = {
  tooltipText?: string;
  placement: 'top' | 'bottom';
} & any;

export const RadioWithTooltip: React.FC<RadioWithTooltipProps> = ({
  tooltipText,
  placement,
  ...props
}) => {
  return (
    <VStack alignItems="flex-start">
      <HStack>
        <RadioWrapper {...props} />
        <Box display={['none', 'none', 'block']}>
          <Tooltip placement={placement} hasArrow label={tooltipText}>
            <QuestionOutlineIcon color="gray.500" />
          </Tooltip>
        </Box>
      </HStack>
      <Text display={['block', 'block', 'none']} fontSize="sm" color="gray.500">
        {tooltipText}
      </Text>
    </VStack>
  );
};

RadioWithTooltip.defaultProps = {
  placement: 'top',
};
