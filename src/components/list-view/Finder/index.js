import React, { Component } from "react";

/** Core */
import Input from "../../core/Input";
import Button from "../../core/Button";

class Finder extends Component {
  state = {
    currentValue: ""
  };

  render() {
    return (
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
  }
}

export default Finder;
