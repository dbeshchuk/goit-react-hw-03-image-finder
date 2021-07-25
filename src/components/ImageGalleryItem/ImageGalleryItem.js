import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ImageGalleryItem extends PureComponent {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          src={this.props.webformatURL}
          alt=""
          data-image={this.props.largeImageURL}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
