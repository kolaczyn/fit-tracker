import { QuestionOutlineIcon } from '@chakra-ui/icons';
import { HStack, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons/lib';
import { RadioWrapper } from './RadioWrapper';

type RadioWithTooltipProps = {
  tooltipText?: string;
  placement: 'top' | 'bottom'
} & any;

export const RadioWithTooltip: React.FC<RadioWithTooltipProps> = ({
  tooltipText,
  placement,
  ...props
}) => {
  return (
    <HStack>
      <RadioWrapper {...props} />
      <Tooltip placement={placement} hasArrow label={tooltipText}>
        <QuestionOutlineIcon color="gray.500" />
      </Tooltip>
    </HStack>
  );
};

RadioWithTooltip.defaultProps = {
  placement: 'top'
}
