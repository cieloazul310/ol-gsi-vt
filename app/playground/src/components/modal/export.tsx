import { useState, useMemo } from "react";
import { Modal, Tabs, Button } from "@yamada-ui/react";
import { useCode } from "@/utils/use-code";
import { usePaletteJson } from "@/utils/use-palette-json";
import { ExportTabPanelItem } from "./export-tab-panel-item";

export function ExportModal({ onClose }: Pick<Modal.RootProps, "onClose">) {
  const [index, onChange] = useState<number>(0);
  const jsClipboard = useCode();
  const jsonClipboard = usePaletteJson();
  const downloadUrl = useMemo(() => {
    const blob = new Blob([jsonClipboard.value], {
      type: "application/json",
    });
    return URL.createObjectURL(blob);
  }, [jsonClipboard]);

  return (
    <>
      <Modal.Header>エクスポート</Modal.Header>
      <Modal.Body>
        <Tabs.Root index={index} onChange={onChange}>
          <Tabs.List>
            <Tabs.Tab index={0}>JavaScript</Tabs.Tab>
            <Tabs.Tab index={1}>JSON (Palette)</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel index={0}>
            <ExportTabPanelItem clipboard={jsClipboard} lang="js" />
          </Tabs.Panel>
          <Tabs.Panel index={1}>
            <ExportTabPanelItem clipboard={jsonClipboard} lang="json" />
          </Tabs.Panel>
        </Tabs.Root>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="subtle" onClick={onClose}>
          Close
        </Button>
        <Button
          as="a"
          download={index !== 0}
          href={index !== 0 ? downloadUrl : undefined}
          colorScheme="primary"
          disabled={index === 0}
        >
          Save as JSON
        </Button>
      </Modal.Footer>
    </>
  );
}

export default ExportModal;
