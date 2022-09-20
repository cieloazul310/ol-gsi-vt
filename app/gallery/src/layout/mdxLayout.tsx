import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from '../components/mdxComponents';

function MdxLayout({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
}

export default MdxLayout;
