import { ImageType, ModalDataType } from "../../types";
import css from "./ImageCard.module.css";

const ImageCard = ({
  image,
  handleImageClick,
}: {
  image: ImageType;
  handleImageClick: (image: ModalDataType) => void;
}) => {
  const imgModalData = {
    imgSrc: image.urls.regular,
    imgDescription: image.description,
    imgAltDescription: image.alt_description,
    imgAuthor: image.user.name,
    imgLikes: image.likes,
  };

  return (
    <div className={css.imageBlock} onClick={() => handleImageClick(imgModalData)}>
      <img src={image.urls.small} alt={image.alt_description} width="400" />
    </div>
  );
};

export default ImageCard;
