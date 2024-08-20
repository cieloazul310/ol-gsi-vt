import { Modal, type ModalProps } from "@yamada-ui/react";
import PresetModal from "./preset";
import ExportModal from "./export";

export type ModalType = "preset" | "export";

type MyModalProps = ModalProps & {
  type: ModalType;
};

function MyModal({ type, ...props }: MyModalProps) {
  return (
    <Modal {...props} size={type === "export" ? "4xl" : "lg"}>
      {type === "preset" ? (
        <PresetModal onClose={props.onClose} />
      ) : (
        <ExportModal onClose={props.onClose} />
      )}
    </Modal>
  );
}

export default MyModal;
