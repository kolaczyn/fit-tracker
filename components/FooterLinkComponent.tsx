import { Link } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

interface FooterLinkComponentProps {
  href: string;
  Icon?: IconType;
  shouldOpenInNewTab?: boolean
}

export const FooterLinkComponent: React.FC<FooterLinkComponentProps> = ({
  href,
  Icon,
  children,
  shouldOpenInNewTab: openInNewTab
}) => {
  return (
    <Link href={href} target={ openInNewTab ? "_blank" : undefined }>
      <Flex direction="column" align="center">
        {Icon ? <Icon /> : null}
        <span>{children}</span>
      </Flex>
    </Link>
  );
};

FooterLinkComponent.defaultProps = {
  shouldOpenInNewTab: true
}