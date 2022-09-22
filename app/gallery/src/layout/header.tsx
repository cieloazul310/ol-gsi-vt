import * as React from 'react';
import { Box, Heading } from '@chakra-ui/react';

type HeaderProps = {
  title?: string;
};

function Header({ title }: HeaderProps) {
  return (
    <Box minHeight="56px" display="flex" alignItems="center" px={2}>
      <Heading as="h1" fontSize="lg">
        {title ?? '@cieloazul310/ol-gsi-vt'}
      </Heading>
    </Box>
  );
}

export default Header;
