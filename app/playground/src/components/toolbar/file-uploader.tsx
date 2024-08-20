import { FileButton, IconButton } from "@yamada-ui/react";
import { Icon as FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import useFile from "@/utils/useFile";

function FileUploader() {
  const { onChangeFile, isInvalid } = useFile();

  return (
    <FileButton
      accept="application/json"
      as={IconButton}
      icon={<FontAwesomeIcon icon={faUpload} />}
      onChange={onChangeFile}
      isInvalid={isInvalid}
    />
  );
}

export default FileUploader;
