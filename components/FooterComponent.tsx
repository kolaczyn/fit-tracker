import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub as GithubIcon } from 'react-icons/ai';
import { FiTwitter as TwitterIcon } from 'react-icons/fi';
import { MdWeb as WebsiteIcon } from 'react-icons/md';
// import {AiOmu} from 'react-icons/ai'
import {AiOutlineMail as MailIcon } from 'react-icons/ai'

import { FooterLinkComponent } from './FooterLinkComponent';
import theme from '../theme';

interface FooterComponentProps {}

export const FooterComponent: React.FC<FooterComponentProps> = ({}) => {
  return (
    <Box
      boxShadow="lg"
      zIndex="docked"
      bg="gray.900"
      mt="4"
      px="4"
      py="2"
      w="100%"
      color="white"
      position="sticky"
    >
      <VStack spacing={3}>
        <Text>created by Paweł Kołaczyński</Text>
        <HStack spacing={10}>
          <FooterLinkComponent
            Icon={GithubIcon}
            href="https://github.com/kolaczyn"
          >
            GitHub
          </FooterLinkComponent>
          <FooterLinkComponent
            Icon={TwitterIcon}
            href="https://twitter.com/kolaczyn"
          >
            Twitter
          </FooterLinkComponent>
          <FooterLinkComponent shouldOpenInNewTab={false} Icon={MailIcon} href="mailto:kolaczyn@protonmail.com">
            Email
          </FooterLinkComponent>
          <FooterLinkComponent Icon={WebsiteIcon} href="https://kolaczyn.com">
            My Website
          </FooterLinkComponent>
        </HStack>
      </VStack>
    </Box>
  );
};

// 12 minutes left
