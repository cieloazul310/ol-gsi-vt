import * as React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  Divider,
  LinkBox,
  LinkOverlay,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  LightMode,
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

  return (
    <LightMode>
      <Box display="flex">
        <Box
          width="280px"
          display={['none', 'none', 'none', 'block']}
          flexShrink="0"
        >
          <Box
            width="280px"
            height="100%"
            display="flex"
            flexDirection="column"
            overflowY="auto"
            position="fixed"
            zIndex="1200"
            top="0"
            left="0"
          >
            <Box px={6}>
              <Header title="ol-gsi-vt" />
              <Box py={4}>
                <Menu />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" flexGrow="1" maxW="100%">
          <main>{children}</main>
          <Container maxWidth="container.lg" py={8}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {previous ? (
                <LinkBox>
                  <Text>Previous</Text>
                  <Heading as="h4" fontSize="md">
                    <NextLink href={previous.path} passHref>
                      <LinkOverlay>{previous.title}</LinkOverlay>
                    </NextLink>
                  </Heading>
                </LinkBox>
              ) : (
                <div />
              )}
              {next ? (
                <LinkBox>
                  <Text>Next</Text>
                  <Heading as="h4" fontSize="md">
                    <NextLink href={next.path} passHref>
                      <LinkOverlay>{next.title}</LinkOverlay>
                    </NextLink>
                  </Heading>
                </LinkBox>
              ) : (
                <div />
              )}
            </Box>
          </Container>
          <Divider />
          <footer>
            <Container
              py={8}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Heading as="h5" fontSize="md" mb={4}>
                <Link href="/">@cieloazul310/ol-gsi-vt</Link>
              </Heading>
              <Stack gap="2" direction="row" fontSize="sm" mb={4}>
                <Link href="https://github.com/cieloazul310/ol-gsi-vt">
                  GitHub
                </Link>
                <Link href="https://www.npmjs.com/package/@cieloazul310/ol-gsi-vt">
                  npm
                </Link>
                <Link href="https://cieloazul310.github.io">水戸地図</Link>
              </Stack>
              <Text as="small">
                © {new Date().getFullYear()} cieloazul310 All rights reserved.
              </Text>
            </Container>
          </footer>
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
            <DrawerHeader>ol-gsi-vt</DrawerHeader>
            <DrawerBody>
              <Menu />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </LightMode>
  );
}

export default Layout;
