import React from "react";
import PropTypes from "prop-types";

/** Component */
import Finder from "./Finder";

const Toolbar = ({ getCharacters, history }) => (
  <div className="row mb-2">
    <Finder getCharacters={getCharacters} />
    <div className="col-sm-6 text-sm-right">
      <button
        type="button"
        className="btn btn-primary mb-3"
        onClick={() => {
          history.push("/addCharacter");
        }}
      >
        Add New
      </button>
    </div>
  </div>
);

Toolbar.propTypes = {
  getCharacters: PropTypes.func
};

export default Toolbar;
