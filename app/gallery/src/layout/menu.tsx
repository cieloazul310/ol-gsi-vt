import * as React from 'react';
import NextLink from 'next/link';
import { VStack, Button } from '@chakra-ui/react';
import useMenu from '../utils/useMenu';

function Menu() {
  const menu = useMenu();
  return (
    <VStack gap="4" alignItems="start">
      {menu.map(({ path, label, active }) => (
        <NextLink key={path} href={path} passHref>
          <Button isActive={active} variant="link" colorScheme="teal">
            {label}
          </Button>
        </NextLink>
      ))}
    </VStack>
  );
}

export default Menu;
