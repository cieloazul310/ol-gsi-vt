import * as React from 'react';
import {
  Box,
  // Text,
  Heading,
  Stack,
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
import Header from './header';
import Menu from './menu';
import Link from '../components/NextChakraLink';
import { useNeighborPages } from '../utils/useMenu';

type LayoutProps = React.PropsWithChildren<{
  title?: string;
  description?: string;
}>;

function Layout({ children }: LayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { previous, next } = useNeighborPages();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  console.log(previous, next);

  return (
    <Box display="flex" minHeight="100vh">
      <Box
        maxWidth="280px"
        width="100%"
        display={['none', 'none', 'none', 'block']}
      >
        <Box px={6} py={2}>
          <Header title="ol-gsi-vt" />
          <Box>
            <Menu />
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" flexGrow="1" maxW="100%">
        <main>{children}</main>
        <Stack>
          {previous ? (
            <Link href={previous.path} color="teal">
              {previous.title}
            </Link>
          ) : null}
          {next ? (
            <Link href={next.path} color="teal">
              {next.title}
            </Link>
          ) : null}
        </Stack>
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
