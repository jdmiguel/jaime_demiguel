import React, { Component } from "react";

/** Core */
import Input from "../core/Input";
import Button from "../core/Button";

class NewCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="name-field">Name</label>
          <Input
            type="text"
            className="form-control"
            id="name-field"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label for="species-field">Species</label>
          <select className="custom-select" id="species-field">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="form-group">
          <label for="gender-field">Gender</label>
          <div>
            <label className="mr-3">
              <Input
                className="mr-1"
                type="radio"
                autocomplete="off"
                value="male"
                name="optradio"
                checked
              />
              Male
            </label>
            <label className="mr-3">
              <Input
                className="mr-1"
                type="radio"
                value="female"
                name="optradio"
                autocomplete="off"
              />
              Female
            </label>
            <label className="mr-3">
              <Input
                className="mr-1"
                type="radio"
                value="n/a"
                name="optradio"
                autocomplete="off"
              />
              n/a
            </label>
          </div>
        </div>
        <div className="form-group">
          <label for="homeworld-field">Homeworld</label>
          <Input
            type="text"
            className="form-control"
            id="homeworld-field"
            placeholder="Homeworld"
          />
        </div>
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </form>
    );
  }
}

export default NewCharacter;
