import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ModalDataType } from "../../types";

Modal.setAppElement("#root");

const ImageModal = ({
  imageModalData,
  modalIsOpen,
  closeModal,
}: {
  imageModalData: ModalDataType;
  modalIsOpen: boolean;
  closeModal: () => void;
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <div className={css.modalContainer}>
        <div className={css.imageContainer}>
          <img
            className={css.image}
            src={imageModalData.imgSrc}
            alt={imageModalData.imgAltDescription}
          />
        </div>
        <div className={css.imageDescription}>
          {imageModalData.imgDescription}
        </div>
        <ul className={css.addImageInfo}>
          <li>Author: {imageModalData.imgAuthor}</li>
          <li>Likes: {imageModalData.imgLikes}</li>
        </ul>
      </div>
    </Modal>
  );
};

export default ImageModal;
