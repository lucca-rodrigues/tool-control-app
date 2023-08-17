import { Button, IModalProps, Modal as NativeModal, Text } from "native-base";
import { ReactNode } from "react";

interface IModal extends IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  children: ReactNode;
}
export const Modal = ({ isOpen, onClose, onSubmit, children }: IModal) => {
  return (
    <NativeModal isOpen={isOpen} onClose={onClose}>
      <NativeModal.Content maxWidth="350" maxH="212">
        <NativeModal.CloseButton />
        <NativeModal.Header>Return Policy</NativeModal.Header>
        <NativeModal.Body>{children}</NativeModal.Body>
        <NativeModal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={onClose}>
              Cancel
            </Button>
            <Button onPress={onSubmit}>Save</Button>
          </Button.Group>
        </NativeModal.Footer>
      </NativeModal.Content>
    </NativeModal>
  );
};
