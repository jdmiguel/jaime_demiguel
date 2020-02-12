import React, { Component } from "react";
import PropTypes from "prop-types";

class Pagination extends Component {
  state = {
    previousBtnClasses: ["page-item", "disabled"],
    firstBtnClasses: ["page-item", "active"],
    secondBtnClasses: ["page-item"],
    nextBtnClasses: ["page-item"]
  };

  onClickNextPage = () => {
    const { getCharacters } = this.props;
    const {
      previousBtnClasses,
      firstBtnClasses,
      secondBtnClasses,
      nextBtnClasses
    } = this.state;

    this.setState({
      previousBtnClasses: [...previousBtnClasses].filter(
        item => item !== "disabled"
      ),
      firstBtnClasses: [...firstBtnClasses].filter(item => item !== "active"),
      secondBtnClasses: [...secondBtnClasses, "active"],
      nextBtnClasses: [...nextBtnClasses, "disabled"]
    });

    getCharacters(2);
  };

  onClickPrevPage = () => {
    const { getCharacters } = this.props;
    const {
      previousBtnClasses,
      firstBtnClasses,
      secondBtnClasses,
      nextBtnClasses
    } = this.state;

    this.setState({
      previousBtnClasses: [...previousBtnClasses, "disabled"],
      firstBtnClasses: [...firstBtnClasses, "active"],
      secondBtnClasses: [...secondBtnClasses].filter(item => item !== "active"),
      nextBtnClasses: [...nextBtnClasses].filter(item => item !== "disabled")
    });

    getCharacters(1);
  };

  render() {
    const {
      previousBtnClasses,
      firstBtnClasses,
      secondBtnClasses,
      nextBtnClasses
    } = this.state;

    return (
      <nav aria-label="Data grid navigation">
        <ul className="pagination justify-content-end">
          <li className={previousBtnClasses.join(" ")}>
            <button
              type="button"
              className="page-link"
              tabIndex="-1"
              onClick={this.onClickPrevPage}
            >
              Previous
            </button>
          </li>
          <li className={firstBtnClasses.join(" ")}>
            <button
              type="button"
              className="page-link"
              onClick={this.onClickPrevPage}
            >
              1 <span className="sr-only">(current)</span>
            </button>
          </li>
          <li className={secondBtnClasses.join(" ")}>
            <button
              type="button"
              className="page-link"
              onClick={this.onClickNextPage}
            >
              2
            </button>
          </li>
          <li className={nextBtnClasses.join(" ")}>
            <button
              type="button"
              className="page-link"
              onClick={this.onClickNextPage}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  getCharacters: PropTypes.func
};

export default Pagination;
