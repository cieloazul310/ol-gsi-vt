import * as React from "react";
import NextLink from "next/link";
import { VStack, Button, Heading } from "@chakra-ui/react";
import useMenu from "../utils/useMenu";

function Menu() {
  const menu = useMenu();
  return (
    <VStack gap="8" alignItems="start" as="nav">
      {menu.map(({ id, title, pages }) => (
        <section key={id}>
          <Heading as="h3" fontSize="sm" mb={4}>
            {title}
          </Heading>
          <VStack pl={2} alignItems="start">
            {pages.map(({ path, active, ...pageProps }) => (
              <NextLink key={path} href={path} passHref>
                <Button
                  isActive={active}
                  variant="ghost"
                  size="sm"
                  colorScheme="teal"
                >
                  {pageProps.title}
                </Button>
              </NextLink>
            ))}
          </VStack>
        </section>
      ))}
    </VStack>
  );
}

export default Menu;
