// https://github.com/chakra-ui/chakra-ui/blob/main/examples/nextjs-typescript/components/NextChakraLink.tsx
import { PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { LinkProps as NextLinkProps } from 'next/dist/client/link';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

export type NextChakraLinkProps = PropsWithChildren<
  NextLinkProps & Omit<ChakraLinkProps, 'as'>
>;

//  Has to be a new component because both chakra and next share the `as` keyword
function NextChakraLink({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  ...chakraProps
}: NextChakraLinkProps) {
  // https://github.com/hupe1980/gatsby-theme-material-ui/blob/master/packages/gatsby-material-ui-components/src/glink.tsx
  const internal = /^\/(?!\/)/.test(href);

  if (internal) {
    return (
      <NextLink
        passHref={true}
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
      >
        <ChakraLink {...chakraProps}>{children}</ChakraLink>
      </NextLink>
    );
  }

  return (
    <ChakraLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...chakraProps}
    >
      {children}
    </ChakraLink>
  );
}

export default NextChakraLink;
