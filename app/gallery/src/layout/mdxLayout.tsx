import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Container, Box } from '@chakra-ui/react';
import mdxComponents from '../components/mdxComponents';
import Meta from './meta';
import Header from './header';

export type MdxLayoutMeta = {
  title?: string;
  description?: string;
};

export type MdxLayoutProps = React.PropsWithChildren<{
  meta: MdxLayoutMeta;
}>;

function MdxLayout({ children, meta }: MdxLayoutProps) {
  const { title, description } = meta;
  return (
    <>
      <Meta title={title} description={description} />
      <Header title={title} />
      <Box py={2} as="article">
        <MDXProvider components={mdxComponents}>
          <Container maxWidth="container.lg">{children}</Container>
        </MDXProvider>
      </Box>
    </>
  );
}

export default MdxLayout;
