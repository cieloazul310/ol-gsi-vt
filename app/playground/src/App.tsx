import {
  UIProvider,
  Box,
  Flex,
  HStack,
  Button,
  Text,
  useDisclosure,
} from "@yamada-ui/react";
import MapPane from "@/components/map";
import Handler from "@/components/handler";
import PresetModal from "@/components/modal/preset";
import { PaletteStoreProvider } from "@/providers/palette-provider";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <PaletteStoreProvider>
      <UIProvider>
        <Flex width="full" height="full">
          <Box
            width={320}
            height="full"
            overflowY="auto"
            flexShrink={0}
            bg="white"
          >
            <HStack
              gap="sm"
              width="full"
              height="56px"
              bg="white"
              alignItems="center"
              zIndex={10}
              shadow="sm"
              position="sticky"
              left={0}
              top={0}
              px="md"
            >
              <Text>ol-gsi-vt Composer</Text>
            </HStack>
            <Handler />
            <HStack
              gap="sm"
              width="full"
              height="56px"
              bg="white"
              alignItems="center"
              justifyContent="end"
              zIndex={10}
              shadow="sm"
              position="sticky"
              left={0}
              bottom={0}
              px="md"
            >
              <Button onClick={onOpen}>Reset</Button>
              <Button colorScheme="primary">Export</Button>
            </HStack>
          </Box>
          <Box width="full" height="full" flexGrow={1}>
            <MapPane />
          </Box>
        </Flex>
        <PresetModal isOpen={isOpen} onClose={onClose} />
      </UIProvider>
    </PaletteStoreProvider>
  );
}

export default App;
