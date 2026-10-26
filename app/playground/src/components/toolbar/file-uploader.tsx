import { FileButton, IconButton, UploadIcon } from "@yamada-ui/react";
import { useFile } from "@/utils/use-file";

export function FileUploader() {
  const { onChangeFile, isInvalid } = useFile();

  return (
    <FileButton
      accept="application/json"
      colorScheme="primary"
      variant="subtle"
      as={IconButton}
      icon={<UploadIcon />}
      onChange={onChangeFile}
      invalid={isInvalid}
    />
  );
}
