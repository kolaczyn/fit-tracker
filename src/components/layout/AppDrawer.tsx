import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  IconButton,
  VStack,
  DrawerFooter,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Logo } from '../ui/Logo';
import { NavLinks } from './NavLinks';
import { ColorSchemeSwitch } from '../ui/ColorSchemeSwitch';

interface AppDrawerProps {}

export const AppDrawer: React.FC<AppDrawerProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  // close the Drawer on link change
  useEffect(() => {
    const handleRouteChange = () => {
      onClose();
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);
  return (
    <>
      <IconButton
        variant="ghost"
        colorScheme="teal"
        onClick={onOpen}
        aria-label="Hamburger Menu"
        icon={<HamburgerIcon />}
      />
      <Drawer onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Logo />
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems="stretch" spacing="2">
              <NavLinks />
              <ColorSchemeSwitch />
            </VStack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            created by Paweł Kołaczyński
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
