import * as React from 'react';
import { Heading, Text, Code, Box } from '@chakra-ui/react';
import { type MDXProviderComponents } from '@mdx-js/react';

const mdxComponents: MDXProviderComponents = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  h4: (props) => <Heading as="h4" {...props} />,
  h5: (props) => <Heading as="h5" {...props} />,
  h6: (props) => <Heading as="h6" {...props} />,
  p: (props) => <Text {...props} />,
  inlineCode: (props) => <Code {...props} />,
};

export default mdxComponents;
