import React, { Component } from "react";
import PropTypes from "prop-types";

/** Core */
import Button from "../../core/Button";

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
            <Button
              type="Button"
              className="page-link"
              tabIndex="-1"
              onClick={this.onClickPrevPage}
            >
              Previous
            </Button>
          </li>
          <li className={firstBtnClasses.join(" ")}>
            <Button
              type="Button"
              className="page-link"
              onClick={this.onClickPrevPage}
            >
              1 <span className="sr-only">(current)</span>
            </Button>
          </li>
          <li className={secondBtnClasses.join(" ")}>
            <Button
              type="Button"
              className="page-link"
              onClick={this.onClickNextPage}
            >
              2
            </Button>
          </li>
          <li className={nextBtnClasses.join(" ")}>
            <Button
              type="Button"
              className="page-link"
              onClick={this.onClickNextPage}
            >
              Next
            </Button>
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
