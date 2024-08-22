import { lazy, Suspense } from "react";
import { Modal, type ModalProps } from "@yamada-ui/react";
import PresetModal from "./preset";

const ExportModal = lazy(() => import("./export"));

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
        <Suspense>
          <ExportModal onClose={props.onClose} />
        </Suspense>
      )}
    </Modal>
  );
}

export default MyModal;
