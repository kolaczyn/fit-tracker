import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { FiTwitter as TwitterIcon } from 'react-icons/fi';
import { MdWeb as WebsiteIcon } from 'react-icons/md';
import {AiOutlineMail as MailIcon } from 'react-icons/ai'

import { FooterLink } from '../ui/FooterLink';

export const Footer: React.FC = ({}) => {
  return (
    <Box
      zIndex="docked"
      mt="4"
      px="4"
      py="2"
      w="100%"
      position="sticky"
    >
      <VStack spacing={3}>
        <Text>created by Paweł Kołaczyński</Text>
        <HStack spacing={10}>
          <FooterLink
            Icon={GithubIcon}
            href="https://github.com/kolaczyn"
          >
            GitHub
          </FooterLink>
          <FooterLink
            Icon={TwitterIcon}
            href="https://twitter.com/kolaczyn"
          >
            Twitter
          </FooterLink>
          <FooterLink shouldOpenInNewTab={false} Icon={MailIcon} href="mailto:kolaczyn@protonmail.com">
            Email
          </FooterLink>
          <FooterLink Icon={WebsiteIcon} href="https://kolaczyn.com">
            Website
          </FooterLink>
        </HStack>
      </VStack>
    </Box>
  );
};
