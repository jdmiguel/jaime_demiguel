import React from "react";
import PropTypes from "prop-types";

/** Core */
import Button from "../../core/Button";

/** Component */
import Finder from "./Finder";

const BarTool = ({ getCharacters, history }) => (
  <div className="row">
    <Finder getCharacters={getCharacters} />
    <div className="col-sm-6 text-sm-right">
      <Button
        type="button"
        className="btn btn-primary mb-3"
        onClick={() => {
          history.push("/newCharacter");
        }}
      >
        Add New
      </Button>
    </div>
  </div>
);

BarTool.propTypes = {
  getCharacters: PropTypes.func
};

export default BarTool;
