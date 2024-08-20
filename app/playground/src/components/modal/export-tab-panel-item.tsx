import { Box, IconButton, Textarea, useClipboard } from "@yamada-ui/react";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import useShiki from "@/utils/useShiki";

type ExportTabPanelProps = {
  lang: "js" | "json";
  clipboard: ReturnType<typeof useClipboard>;
};

function ExportTabPanelItem({ lang, clipboard }: ExportTabPanelProps) {
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
        icon={<FontAwesomeIcon icon={clipboard.hasCopied ? faCheck : faCopy} />}
        colorScheme={clipboard.hasCopied ? "success" : "whiteAlpha"}
        zIndex={1}
        position="absolute"
        top={2}
        right={2}
        onClick={clipboard.onCopy}
      />
    </Box>
  );
}

export default ExportTabPanelItem;
