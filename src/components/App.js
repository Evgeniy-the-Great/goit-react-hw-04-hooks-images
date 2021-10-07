import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";

const initialState = {
  pictureTag: "",
};

const App = () => {
  const [state, setState] = useState(initialState);

  const handleFormSubmit = (pictureTag) => {
    setState((prev) => ({ ...prev, pictureTag }));
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery pictureTag={state.pictureTag} />
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
