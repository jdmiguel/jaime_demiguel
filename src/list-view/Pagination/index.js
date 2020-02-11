import React, { Component } from "react";

/** Core */
import Button from "../../core/Button";

class Pagination extends Component {
  state = {
    currentValue: ""
  };

  render() {
    return (
      <nav aria-label="Data grid navigation">
        <ul className="pagination justify-content-end">
          <li className="page-item disabled">
            <Button type="Button" className="page-link" tabIndex="-1">
              Previous
            </Button>
          </li>
          <li className="page-item active">
            <Button type="Button" className="page-link">
              1 <span className="sr-only">(current)</span>
            </Button>
          </li>
          <li className="page-item">
            <Button type="Button" className="page-link">
              2
            </Button>
          </li>
          <li className="page-item">
            <Button type="Button" className="page-link">
              Next
            </Button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
