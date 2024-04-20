import { useEffect, useState } from "react";
import axios from "axios";
import { getFetchUrl } from "./api/unsplash-api";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import "./App.css";
import { ApiResponseType, ImagesType } from "../types";

function App() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<ImagesType>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorState, setErrorState] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [moreBtn, setMoreBtn] = useState<boolean>(false);
  const per_page: number = 10;

  const handleNewSearch = (newQuery: string): void => {
    if (newQuery !== "" && newQuery !== query) {
      setQuery(newQuery);
      setPage(1);
      setImages([]);
    }
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function fetchPhotos() {
      setMoreBtn(false);
      setErrorState(false);
      setLoading(true);
      await axios
        .get<ApiResponseType>(getFetchUrl(page, per_page, query))
        .then((response) => {
          const res = response.data;
          if (res.total === 0) {
            setImages([]);
            setErrorMsg("Nothing found! Try a different search phrase!");
            setErrorState(true);
          } else {
            setImages((prevImages) => prevImages.concat(res.results));
            if (page >= res.total_pages) {
              setMoreBtn(false);
            } else {
              setMoreBtn(true);
            }
          }
        })
        .catch((error) => {
          setErrorMsg(
            !error.response.data.errors
              ? error.message
              : error.response.data.errors
          );
          setErrorState(true);
        })
        .finally(() => {
          setLoading(false);
          if (page > 1) {
            window.scrollBy({
              top: window.innerHeight - 200,
              left: 0,
              behavior: "smooth",
            });
          }
        });
    }

    fetchPhotos();
  }, [query, page]);

  const handleNextPage = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleNewSearch} />
      {images.length > 0 && <ImageGallery images={images} />}
      {moreBtn && <LoadMoreBtn onLoadMore={handleNextPage} />}
      {loading && <Loader />}
      {errorState && <ErrorMessage message={errorMsg} />}
    </>
  );
}

export default App;
