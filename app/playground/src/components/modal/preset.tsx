import { useState } from "react";
import {
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
import {
  useDefaultPalette,
  usePalePalette,
  gsiOptVtLayerNameCollection,
} from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";
import type { PaletteType } from "@/stores/palette-store";

function PresetModal({ onClose }: Pick<ModalProps, "onClose">) {
  const [presetType, setPresetType] = useState<PaletteType>("default");
  const { setPalette, setPaletteType, setLayers } = usePaletteStore(
    (store) => store,
  );
  const defaultPalette = useDefaultPalette();
  const palePalette = usePalePalette();
  const onChange = (value: string) => {
    if (value !== "default" && value !== "pale") return;
    setPresetType(value);
  };
  const onClick = () => {
    setPalette(presetType === "pale" ? palePalette : defaultPalette);
    setPaletteType(presetType);
    setLayers([...gsiOptVtLayerNameCollection]);
  };

  return (
    <>
      <ModalHeader>パレットをリセットする</ModalHeader>
      <ModalBody>
        <Alert status="warning">
          <AlertIcon />
          <AlertDescription>
            リセットボタンを押すと現在のパレットは復元できません。
          </AlertDescription>
        </Alert>
        <SegmentedControl width="full" value={presetType} onChange={onChange}>
          <SegmentedControlButton value="default">
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
    </>
  );
}

export default PresetModal;
