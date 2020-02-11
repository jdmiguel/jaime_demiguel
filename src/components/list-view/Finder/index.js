import React from "react";
import PropTypes from "prop-types";

/** Core */
import Input from "../../core/Input";
import Button from "../../core/Button";

const Finder = ({ getCharacters }) => (
  <div className="row">
    <div className="col-sm-6">
      <div className="form-group">
        <label htmlFor="searchInput" className="sr-only">
          Search
        </label>
        <Input
          type="text"
          className="form-control"
          id="searchInput"
          placeholder="Search..."
          onChange={e => getCharacters(e.currentTarget.value)}
        />
      </div>
    </div>
    <div className="col-sm-6 text-sm-right">
      <Button type="button" className="btn btn-primary mb-3">
        Add New
      </Button>
    </div>
  </div>
);

Finder.propTypes = {
  getCharacters: PropTypes.func
};

export default Finder;
