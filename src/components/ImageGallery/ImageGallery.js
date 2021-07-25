import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, onClick }) => (
  <ul className="ImageGallery" onClick={onClick}>
    {images.map(({ webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        key={shortid.generate()}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
