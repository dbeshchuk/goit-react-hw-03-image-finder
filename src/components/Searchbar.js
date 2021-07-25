import React from "react";
import PropTypes from "prop-types";

const Searchbar = ({ onSubmit, value, onChange }) => (
  <header className="Searchbar">
    <form className="SearchForm" onSubmit={onSubmit}>
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        className="SearchForm-input"
        name="searchInput"
        value={value}
        onChange={onChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Searchbar;
