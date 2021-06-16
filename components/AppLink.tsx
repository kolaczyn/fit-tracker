import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { Button } from '@chakra-ui/react';

interface AppLinkProps {
  href: string;
  label: string;
}

export const AppLink: React.FC<AppLinkProps> = ({ href, label }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <NextLink href={href}>
      <Button mx="0.5" colorScheme="cyan" variant={isActive ? 'outline' : 'ghost'}>{label}</Button>
    </NextLink>
  );
};
