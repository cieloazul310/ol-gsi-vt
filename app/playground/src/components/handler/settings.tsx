import { Text, Accordion } from "@yamada-ui/react";
import { FormatHandler } from "./format-handler";

export function Settings({ index }: { index: number }) {
  return (
    <Accordion.Item index={index} button="設定">
      <Accordion.Panel py="md" display="flex" flexDirection="column" gap="sm">
        <Text>モード</Text>
        <FormatHandler />
      </Accordion.Panel>
    </Accordion.Item>
  );
}
