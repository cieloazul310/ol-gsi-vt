import * as React from 'react';
import {
  Box,
  // Text,
  IconButton,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Menu from './menu';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  return (
    <Box display="flex" minHeight="100vh">
      <Box
        maxWidth="var(--chakra-sizes-xs)"
        width="100%"
        bg="var(--chakra-colors-gray-700)"
        display={['none', 'none', 'none', 'block']}
      >
        <Box px={6} py={2}>
          <Box as="header">@cieloazul310/ol-gsi-vt</Box>
          <Box>
            <Menu />
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" flexGrow="1">
        <Container maxW="container.lg">
          <main>{children}</main>
        </Container>
        <IconButton
          display={['block', 'block', 'block', 'none']}
          position="fixed"
          size="lg"
          zIndex={2}
          right={4}
          bottom={4}
          onClick={onOpen}
          aria-label="Open Drawer"
          icon={<HamburgerIcon />}
          ref={btnRef}
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>@cieloazul310/ol-gsi-vt</DrawerHeader>
          <DrawerBody>
            <Menu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Layout;
