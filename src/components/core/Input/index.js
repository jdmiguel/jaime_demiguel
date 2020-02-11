import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, className, id, placeHolder, onChange }) => (
  <input
    type={type}
    className={className}
    id={id}
    placeholder={placeHolder}
    onChange={onChange}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
