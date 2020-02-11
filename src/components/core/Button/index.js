import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  type,
  className,
  ariaExpanded,
  ariaLabel,
  onClick
}) => (
  <button
    type={type}
    className={className}
    aria-expanded={ariaExpanded}
    aria-label={ariaLabel}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  ariaExpanded: PropTypes.bool,
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  ariaExpanded: false,
  ariaLabel: ""
};

export default Button;
