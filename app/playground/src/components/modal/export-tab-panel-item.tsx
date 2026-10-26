import {
  Box,
  IconButton,
  Textarea,
  useClipboard,
  CheckIcon,
  CopyIcon,
} from "@yamada-ui/react";
import { useShiki } from "@/utils/use-shiki";

type ExportTabPanelProps = {
  lang: "js" | "json";
  clipboard: ReturnType<typeof useClipboard>;
};

export function ExportTabPanelItem({ lang, clipboard }: ExportTabPanelProps) {
  const code = useShiki(clipboard.value, {
    lang,
    theme: "dark-plus",
    structure: "inline",
  });

  return (
    <Box width="full" position="relative">
      <Textarea
        as="pre"
        height="50vh"
        overflowY="auto"
        bg="gray.800"
        p="md"
        readOnly
      >
        <Box as="code" fontSize="sm" fontFamily="mono">
          {code}
        </Box>
      </Textarea>
      <IconButton
        variant="ghost"
        icon={clipboard.copied ? <CheckIcon /> : <CopyIcon />}
        colorScheme={clipboard.copied ? "success" : "white"}
        zIndex={1}
        position="absolute"
        top={2}
        right={2}
        onClick={clipboard.onCopy}
      />
    </Box>
  );
}
