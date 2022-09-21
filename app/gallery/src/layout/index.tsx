import * as React from 'react';
import {
  Box,
  // Text,
  Heading,
  IconButton,
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

type LayoutProps = React.PropsWithChildren<{
  title?: string;
  description?: string;
}>;

function Layout({ children }: LayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  return (
    <Box display="flex" minHeight="100vh">
      <Box
        maxWidth="280px"
        width="100%"
        display={['none', 'none', 'none', 'block']}
      >
        <Box px={6} py={2}>
          <Box as="header" py={4}>
            <Heading as="h2" fontSize="lg" mb={8}>
              @cieloazul310/ol-gsi-vt
            </Heading>
          </Box>
          <Box>
            <Menu />
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" flexGrow="1">
        <main>{children}</main>
        <Box
          display={['block', 'block', 'block', 'none']}
          position="fixed"
          zIndex={2}
          right={4}
          bottom={4}
        >
          <IconButton
            size="lg"
            colorScheme="teal"
            onClick={onOpen}
            aria-label="Open Drawer"
            icon={<HamburgerIcon />}
            ref={btnRef}
          />
        </Box>
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
