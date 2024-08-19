// import { useState } from "react";
import {
  Box,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  IconButton,
  Textarea,
  useClipboard,
  type ModalProps,
} from "@yamada-ui/react";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import useCode from "@/utils/useCode";
// import { codeToHtml } from "shiki";
// import { useDefaultPalette, usePalePalette } from "@cieloazul310/ol-gsi-vt";
// import { usePaletteStore } from "@/providers/palette-provider";

function ExportModal({ onClose }: Pick<ModalProps, "onClose">) {
  const code = useCode();
  const { onCopy, value } = useClipboard(code);

  return (
    <>
      <ModalHeader>エクスポート</ModalHeader>
      <ModalBody>
        <Box width="full" position="relative">
          <Textarea readOnly minHeight="50vh" value={value} />
          <IconButton
            variant="ghost"
            icon={<FontAwesomeIcon icon={faCopy} />}
            zIndex={1}
            position="absolute"
            top={2}
            right={2}
            onClick={onCopy}
          />
        </Box>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
        <Button colorScheme="primary">Save as JSON</Button>
      </ModalFooter>
    </>
  );
}

export default ExportModal;
