import { Text, AccordionItem, AccordionPanel } from "@yamada-ui/react";
import FormatHandler from "./format-handler";

function Settings() {
  return (
    <AccordionItem label="設定">
      <AccordionPanel py="md" display="flex" flexDirection="column" gap="sm">
        <Text>モード</Text>
        <FormatHandler />
      </AccordionPanel>
    </AccordionItem>
  );
}

export default Settings;
