import { Link, type LinkProps } from "@chakra-ui/next-js";

export type NextChakraLinkProps = LinkProps;

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
  const internal = /^\/(?!\/)/.test(href.toString());

  if (internal) {
    return (
      <Link
        href={href}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        {...chakraProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...chakraProps}
    >
      {children}
    </Link>
  );
}

export default NextChakraLink;
