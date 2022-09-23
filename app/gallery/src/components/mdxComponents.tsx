import * as React from 'react';
import {
  Heading,
  Text,
  Code,
  Box,
  Divider,
  ListItem,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
import { type MDXProviderComponents } from '@mdx-js/react';
import Link from './NextChakraLink';

const mdxComponents: MDXProviderComponents = {
  h1: (props) => <Heading as="h1" mt={8} mb={4} {...props} />,
  h2: (props) => (
    <>
      <Heading as="h2" fontSize="2xl" mt={8} {...props} />
      <Divider mb={4} />
    </>
  ),
  h3: (props) => <Heading as="h3" mt={8} mb={4} fontSize="xl" {...props} />,
  h4: (props) => <Heading as="h4" mt={8} mb={4} fontSize="lg" {...props} />,
  h5: (props) => <Heading as="h5" mt={8} mb={4} fontSize="md" {...props} />,
  h6: (props) => <Heading as="h6" mt={8} mb={4} fontSize="sm" {...props} />,
  p: (props) => <Text mt={4} mb={8} {...props} />,
  inlineCode: (props) => <Code fontSize="inherit" {...props} />,
  pre: (props) => (
    <Box my={8}>
      <Box as="pre" overflow="auto" {...props} />
    </Box>
  ),
  ol: (props) => <OrderedList my={8} {...props} />,
  ul: (props) => (
    <UnorderedList
      my={8}
      sx={{
        'li > ul': {
          mt: 0,
          mb: 2,
        },
      }}
      {...props}
    />
  ),
  li: (props) => <ListItem {...props} />,
  hr: () => <Divider my={16} />,
  a: (props) => <Link {...props} color="teal" />,
};

export default mdxComponents;
