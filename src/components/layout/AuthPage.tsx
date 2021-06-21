import { Box, Grid, Image } from '@chakra-ui/react';
import React from 'react';

interface AuthPageProps {
  illustrationUrl: string;
}

/** Layout for `login/` and `register/` pages */
export const AuthPage: React.FC<AuthPageProps> = ({
  illustrationUrl,
  children,
}) => {
  return (
    <Grid
      alignItems="center"
      height="100%"
      templateColumns={['1fr', '1fr', '4fr 6fr', '1fr 1fr']}
      gap="8"
    >
      <Image
        display={['none', 'none', 'initial']}
        src={illustrationUrl}
        alt=""
      />
      <Box>{children}</Box>
    </Grid>
  );
};
