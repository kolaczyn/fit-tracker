import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { AppLink } from '../ui/AppLink';
import { UserDropdown } from './UserDropdown';

interface NavLinksProps {}

export const NavLinks: React.FC<NavLinksProps> = ({}) => {
  const user = useAppSelector(state => state.auth.user);
  return (
    <>
      <AppLink href="/" label="Home" />
      <AppLink href="/food" label="Food" />
      {/* <AppLink href="/meals" label="Meals" /> */}
      <AppLink href="/calculators" label="Calculators" />
      {user ? (
        <UserDropdown />
      ) : (
        <>
          <AppLink href="/login" label="Login" />
          <AppLink href="/register" label="Register" />
        </>
      )}
    </>
  );
};
