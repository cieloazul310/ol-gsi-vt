import { useState, useMemo } from "react";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tabs,
  Tab,
  TabPanel,
  Button,
  type ModalProps,
} from "@yamada-ui/react";
import useJsCode from "@/utils/useJsCode";
import usePaletteJson from "@/utils/usePaletteJson";
import ExportTabPanelItem from "./export-tab-panel-item";

function ExportModal({ onClose }: Pick<ModalProps, "onClose">) {
  const [index, onChange] = useState<number>(0);
  const jsClipboard = useJsCode();
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
            <ExportTabPanelItem clipboard={jsClipboard} lang="js" />
          </TabPanel>
          <TabPanel>
            <ExportTabPanelItem clipboard={jsonClipboard} lang="json" />
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
