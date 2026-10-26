import { useState } from "react";
import { Modal, Alert, Button, SegmentedControl } from "@yamada-ui/react";
import {
  createDefaultPalette,
  createPalePalette,
  gsiOptVtLayerNameCollection,
} from "@cieloazul310/ol-gsi-vt";
import { usePaletteStore } from "@/providers/palette-provider";
import type { PaletteType } from "@/stores/palette-store";

export function PresetModal({ onClose }: Pick<Modal.RootProps, "onClose">) {
  const [presetType, setPresetType] = useState<PaletteType>("default");
  const { setPalette, setPaletteType, setLayers } = usePaletteStore(
    (store) => store,
  );
  const defaultPalette = createDefaultPalette();
  const palePalette = createPalePalette();
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
      <Modal.Header>パレットをリセットする</Modal.Header>
      <Modal.Body>
        <Alert.Root status="warning">
          <Alert.Icon />
          <Alert.Description>
            リセットボタンを押すと現在のパレットは復元できません。
          </Alert.Description>
        </Alert.Root>
        <SegmentedControl.Root
          width="full"
          value={presetType}
          onChange={onChange}
        >
          <SegmentedControl.Item value="default">
            デフォルト
          </SegmentedControl.Item>
          <SegmentedControl.Item value="pale">淡色</SegmentedControl.Item>
        </SegmentedControl.Root>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="subtle" onClick={onClose}>
          Close
        </Button>
        <Button colorScheme="primary" onClick={onClick}>
          Reset
        </Button>
      </Modal.Footer>
    </>
  );
}
