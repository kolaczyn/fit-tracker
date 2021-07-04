import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { HStack } from '@chakra-ui/layout';
import React from 'react';

export const ColorSchemeSwitch: React.FC<{ showLabel?: boolean }> = ({
  showLabel,
}) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Button
      aria-label="Toggle Theme"
      colorScheme="teal"
      variant="ghost"
      onClick={toggleColorMode}
    >
      <HStack>
        <span>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</span>
        {showLabel && <span>Toggle Theme</span>}
      </HStack>
    </Button>
  );
};

ColorSchemeSwitch.defaultProps = {
  showLabel: false,
};
