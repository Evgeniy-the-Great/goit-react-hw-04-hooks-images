import React, { useState, useEffect } from "react";
import { getImages } from "../../servises/api";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import Loader from "../Loader/Spiner";

const ImageGallery = ({ pictureTag }) => {
  const [pictures, setPictures] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pictureTag) {
      return;
    }
    setLoading(true);
    getImages(pictureTag, 1)
      .then((pictures) => {
        setPictures(pictures);
        setIsHidden(true);
        setPage(page + 1);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [pictureTag]);

  const onBtnClick = () => {
    setLoading(true);
    getImages(pictureTag, page)
      .then((image) => {
        setPictures([...pictures, ...image]);
        setIsHidden(true);
        setPage(page + 1);
        setLoading(true);
        if (page !== 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  };

  return (
    <div className="ImageContainer">
      {loading && <Loader />}
      <ul className="ImageGallery">
        {pictures && <ImageGalleryItem pictures={pictures} />}
      </ul>
      {isHidden && (
        <button type="button" className="Button" onClick={onBtnClick}>
          Load more
        </button>
      )}
    </div>
  );
};

ImageGallery.propTypes = {
  pictureTag: PropTypes.string,
};

export default ImageGallery;
