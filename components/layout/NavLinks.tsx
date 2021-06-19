import React from 'react';
import { AppLink } from '../ui/AppLink';

interface NavLinksProps {}

export const NavLinks: React.FC<NavLinksProps> = ({}) => {
  return (
    <>
      <AppLink href="/" label="Home" />
      <AppLink href="/calories" label="Calories" />
      <AppLink href="/food" label="Food" />
      <AppLink href="/meals" label="Meals" />
      <AppLink href="/calculator" label="Calculator" />
    </>
  );
};
