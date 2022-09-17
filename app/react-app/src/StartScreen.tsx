import * as React from 'react';
import { Box, Progress, Heading } from '@chakra-ui/react';

function StartScreen() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexGrow="1"
    >
      <Box>
        <Heading as="h2" fontSize="xl">Loading...</Heading>
        <Progress size="xs" isIndeterminate />
      </Box>
    </Box>
  );
}

export default StartScreen;
