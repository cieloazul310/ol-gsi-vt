import { lazy, Suspense } from "react";
import { Modal } from "@yamada-ui/react";
import { PresetModal } from "./preset";

const ExportModal = lazy(() => import("./export"));

export type ModalType = "preset" | "export";

type MyModalProps = Modal.RootProps & {
  type: ModalType;
};

export function MyModal({ type, ...props }: MyModalProps) {
  return (
    <Modal.Root {...props} size={type === "export" ? "4xl" : "lg"}>
      <Modal.Overlay />
      <Modal.Content>
        {type === "preset" ? (
          <PresetModal onClose={props.onClose} />
        ) : (
          <Suspense>
            <ExportModal onClose={props.onClose} />
          </Suspense>
        )}
      </Modal.Content>
    </Modal.Root>
  );
}

export default MyModal;
