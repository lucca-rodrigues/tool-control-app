import { useCallback, useState } from "react";

export default function modalActions() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpenModal(true);
    console.log("Abriu o modal", isOpenModal);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const handleSubmitModal = useCallback(() => {
    console.log("Confirmado com sucesso!");
  }, []);

  return {
    isOpenModal,
    setIsOpenModal,
    handleOpenModal,
    handleCloseModal,
    handleSubmitModal,
  };
}
