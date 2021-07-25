import React from "react";
import PropTypes from "prop-types";

const ImageGallery = ({ onClick, children }) => (
  <ul className="ImageGallery" onClick={onClick}>
    {children}
  </ul>
);

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
