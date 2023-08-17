import { Center, Text } from "native-base";

import { Modal } from "../../../../components";
import modalActions from "../../hooks/modalActions";

export const ModalConfirmation = () => {
  const { isOpenModal, handleCloseModal, handleSubmitModal } = modalActions();
  return (
    <Modal
      isOpen={isOpenModal}
      onClose={handleCloseModal}
      onSubmit={handleSubmitModal}
    >
      <Center>
        <Text>Ao encerrar o inventário</Text>
        <Text>sua situação mudará para:</Text>
        <Text>“EM CONCILIAÇÃO”</Text>
      </Center>
    </Modal>
  );
};
