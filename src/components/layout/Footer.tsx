import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { FiTwitter as TwitterIcon } from 'react-icons/fi';
import { MdWeb as WebsiteIcon } from 'react-icons/md';
import { AiOutlineMail as MailIcon } from 'react-icons/ai';

import { FooterLink } from '../ui/FooterLink';
import { Bar } from './Bar';

export const Footer: React.FC = ({}) => {
  return (
    <Bar>
      <VStack spacing={3}>
        <Text>created by Paweł Kołaczyński</Text>
        <HStack spacing={10}>
          <FooterLink Icon={GithubIcon} href="https://github.com/kolaczyn">
            GitHub
          </FooterLink>
          <FooterLink Icon={TwitterIcon} href="https://twitter.com/kolaczyn">
            Twitter
          </FooterLink>
          <FooterLink
            shouldOpenInNewTab={false}
            Icon={MailIcon}
            href="mailto:kolaczyn@protonmail.com"
          >
            Email
          </FooterLink>
          <FooterLink Icon={WebsiteIcon} href="https://kolaczyn.com">
            Website
          </FooterLink>
        </HStack>
      </VStack>
    </Bar>
  );
};
