export type ModalDataType = {
  imgSrc: string;
  imgAltDescription?: string;
  imgDescription?: string;
  imgAuthor?: string;
  imgLikes?: number;
};

export type ImageType = {
  id: string;
  description?: string;
  alt_description?: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
  likes: number;
};

export type ImagesType = ImageType[];

export type ApiResponseType = {
  total: number;
  total_pages: number;
  results: ImagesType;
};
