import { useState, useMemo } from "react";
import {
  Box,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tabs,
  Tab,
  TabPanel,
  Button,
  IconButton,
  Textarea,
  useClipboard,
  type ModalProps,
} from "@yamada-ui/react";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import useCode from "@/utils/useCode";
import usePaletteJson from "@/utils/usePaletteJson";

function ExportModal({ onClose }: Pick<ModalProps, "onClose">) {
  const [index, onChange] = useState<number>(0);
  const code = useCode();
  const jsClipboard = useClipboard(code);
  const jsonClipboard = usePaletteJson();
  const downloadUrl = useMemo(() => {
    const blob = new Blob([jsonClipboard.value], {
      type: "application/json",
    });
    return URL.createObjectURL(blob);
  }, [jsonClipboard]);

  return (
    <>
      <ModalHeader>エクスポート</ModalHeader>
      <ModalBody>
        <Tabs index={index} onChange={onChange}>
          <Tab>JavaScript</Tab>
          <Tab>JSON (Palette)</Tab>
          <TabPanel>
            <Box width="full" position="relative">
              <Textarea readOnly minHeight="50vh" value={jsClipboard.value} />
              <IconButton
                variant="ghost"
                icon={
                  <FontAwesomeIcon
                    icon={jsClipboard.hasCopied ? faCheck : faCopy}
                  />
                }
                colorScheme={jsClipboard.hasCopied ? "success" : "gray"}
                zIndex={1}
                position="absolute"
                top={2}
                right={2}
                onClick={jsClipboard.onCopy}
              />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box width="full" position="relative">
              <Textarea readOnly minHeight="50vh" value={jsonClipboard.value} />
              <IconButton
                variant="ghost"
                icon={
                  <FontAwesomeIcon
                    icon={jsonClipboard.hasCopied ? faCheck : faCopy}
                  />
                }
                colorScheme={jsonClipboard.hasCopied ? "success" : "gray"}
                zIndex={1}
                position="absolute"
                top={2}
                right={2}
                onClick={jsonClipboard.onCopy}
              />
            </Box>
          </TabPanel>
        </Tabs>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
        <Button
          as="a"
          download={index !== 0}
          href={index !== 0 ? downloadUrl : undefined}
          colorScheme="primary"
          disabled={index === 0}
        >
          Save as JSON
        </Button>
      </ModalFooter>
    </>
  );
}

export default ExportModal;
