import { useState, lazy, Suspense } from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  IconButton,
  Spacer,
  useDisclosure,
} from "@yamada-ui/react";
import { FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Handler from "@/components/handler";
import type { ModalType } from "@/components/modal";
import FileUploader from "@/components/toolbar/file-uploader";
import { PaletteStoreProvider } from "@/providers/palette-provider";
import Loader from "./loader";

const MapPane = lazy(() => import("@/components/map"));
const Modal = lazy(() => import("@/components/modal"));

function App() {
  const [modal, setModal] = useState<ModalType>("preset");
  const { onClose, isOpen, onOpen } = useDisclosure();
  const onModalOpen = (modalType: ModalType) => () => {
    setModal(modalType);
    onOpen();
  };

  return (
    <PaletteStoreProvider>
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
            <Text fontWeight="bold">ol-gsi-vt Composer</Text>
            <Spacer />
            <IconButton
              as="a"
              href="https://cieloazul310.github.io/ol-gsi-vt"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              icon={<FontAwesomeIcon icon={faHouse} />}
            />
            <IconButton
              as="a"
              href="https://github.com/cieloazul310/ol-gsi-vt"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              icon={<FontAwesomeIcon icon={faGithub} />}
            />
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
            <FileUploader />
            <Spacer />
            <Button onClick={onModalOpen("preset")}>Reset</Button>
            <Button colorScheme="primary" onClick={onModalOpen("export")}>
              Export
            </Button>
          </HStack>
        </Box>
        <Box width="full" height="full" flexGrow={1}>
          <Suspense fallback={<Loader />}>
            <MapPane />
          </Suspense>
        </Box>
      </Flex>
      <Suspense>
        <Modal
          type={modal}
          isOpen={isOpen}
          onClose={onClose}
          size={modal === "export" ? "4xl" : "lg"}
        />
      </Suspense>
    </PaletteStoreProvider>
  );
}

export default App;
