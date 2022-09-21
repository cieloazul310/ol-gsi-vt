import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Container } from '@chakra-ui/react';
import mdxComponents from '../components/mdxComponents';
import Meta from './meta';

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
      <MDXProvider components={mdxComponents}>
        <Container maxWidth="container.lg">{children}</Container>
      </MDXProvider>
    </>
  );
}

export default MdxLayout;
