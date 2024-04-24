// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import axios from "axios";
import "./App.css";
// import ImageCart from "./ImageCard./ImageCard";
import ImageModal from ".//ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchForm from "./SearchBar/SearchBar";
import { requestImagesByQuery } from "../articles-api";
import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./loader/loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
export default function App() {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setGallery("");
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
          LoadMoreBtn(false);
        }
        setGallery((prevGallery) => {
          return [...prevGallery, ...data];
        });
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

      {gallery.length > 0 && !isLoading && (
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
