import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import React from 'react';

export const ColorSchemeSwitch: React.FC = ({}) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Button aria-label="Toggle Theme" colorScheme="teal" variant="ghost" onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
