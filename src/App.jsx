import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchForm from "./components/SearchBar/SearchBar";
import { requestImagesByQuery } from "../articles-api";
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/loader/loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

export default function App() {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [hasMoreImages, setHasMoreImages] = useState(true); // State to control if there are more images to load

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setGallery([]);
    setHasMoreImages(true); // Reset the state when performing a new search
  };

  const handelLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getImagesByQuery() {
      try {
        setIsLoading(true);
        const data = await requestImagesByQuery(query, page);
        if (data.length < 10) {
          setHasMoreImages(false); // Set hasMoreImages to false when there are no more images to load
        }
        setGallery((prevGallery) => [...prevGallery, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImagesByQuery();
  }, [page, query]);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />

      {error && <ErrorMessage />}

      {gallery.length > 0 && (
        <ImageGallery images={gallery} openModal={openModal} />
      )}

      {isLoading && <Loader />}

      {gallery.length > 0 && !isLoading && hasMoreImages && (
        <LoadMoreBtn handelLoadMore={handelLoadMore} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        selectedImage={selectedImage}
      />
    </div>
  );
}
