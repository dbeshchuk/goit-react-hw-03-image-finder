import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

const ImageGalleryItem = ({ images }) =>
  images.map(({ webformatURL, largeImageURL }) => (
    <li className="ImageGalleryItem" key={shortid.generate()}>
      <img
        src={webformatURL}
        alt=""
        data-image={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  ));

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGalleryItem;
