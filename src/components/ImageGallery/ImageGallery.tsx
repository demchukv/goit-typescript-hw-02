import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImagesType, ModalDataType } from "../../types";
import { useState } from "react";
import ImageModal from "../ImageModal/ImageModal";

const ImageGallery = ({ images }: { images: ImagesType }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [imageModalData, setImageModalData] = useState<ModalDataType>({
    imgSrc: "",
    imgDescription: "",
    imgAltDescription: "",
    imgAuthor: "",
    imgLikes: 0,
  });

  const openModal = (): void => {
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  const handleImageClick = (imageModal: ModalDataType): void => {
    setImageModalData(imageModal);
    openModal();
  };

  return (
    <>
      <ul className={css.gallery}>
        {images.map((image, idx) => {
          return (
            <li key={image.id + idx}>
              <ImageCard image={image} handleImageClick={handleImageClick} />
            </li>
          );
        })}
      </ul>
      {images.length > 0 && (
        <ImageModal
          imageModalData={imageModalData}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ImageGallery;
