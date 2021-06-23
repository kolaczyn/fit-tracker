import { Link } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

interface FooterLinkProps {
  href: string;
  Icon?: IconType;
  shouldOpenInNewTab?: boolean
}

export const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  Icon,
  children,
  shouldOpenInNewTab: openInNewTab
}) => {
  return (
    <Link rel="noreferrer" href={href} target={ openInNewTab ? "_blank" : undefined }>
      <Flex direction="column" align="center">
        {Icon ? <Icon /> : null}
        <span>{children}</span>
      </Flex>
    </Link>
  );
};

FooterLink.defaultProps = {
  shouldOpenInNewTab: true
}