import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  AlertIcon,
  AlertDescription,
  Button,
  SegmentedControl,
  SegmentedControlButton,
  type ModalProps,
} from "@yamada-ui/react";
import { useDefaultPalette, usePalePalette } from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";

function PresetModal(props: ModalProps) {
  const [paletteType, setPaletteType] = useState("normal");
  const setPalette = usePaletteStore((store) => store.setPalette);
  const defaultPalette = useDefaultPalette();
  const palePalette = usePalePalette();
  const onChange = (value: string) => {
    setPaletteType(value);
  };
  const onClick = () => {
    setPalette(paletteType === "pale" ? palePalette : defaultPalette);
  };
  const onClose = () => {
    props.onClose?.();
  };

  return (
    <Modal {...props}>
      <ModalHeader>パレットをリセットする</ModalHeader>
      <ModalBody>
        <Alert status="warning">
          <AlertIcon />
          <AlertDescription>
            リセットボタンを押すと現在のパレットは復元できません。
          </AlertDescription>
        </Alert>
        <SegmentedControl value={paletteType} onChange={onChange}>
          <SegmentedControlButton value="normal">
            デフォルト
          </SegmentedControlButton>
          <SegmentedControlButton value="pale">淡色</SegmentedControlButton>
        </SegmentedControl>
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
        <Button colorScheme="primary" onClick={onClick}>
          Reset
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default PresetModal;
