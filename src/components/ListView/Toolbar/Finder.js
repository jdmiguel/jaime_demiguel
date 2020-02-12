import React from "react";
import PropTypes from "prop-types";

const Finder = ({ getCharacters }) => {
  return (
    <div className="col-sm-6">
      <div className="form-group">
        <label htmlFor="searchInput" className="sr-only">
          Search
        </label>
        <input
          className="form-control"
          id="searchInput"
          placeholder="Search..."
          onChange={e => getCharacters(e.currentTarget.value)}
        />
      </div>
    </div>
  );
};

Finder.propTypes = {
  getCharacters: PropTypes.func
};

export default Finder;
