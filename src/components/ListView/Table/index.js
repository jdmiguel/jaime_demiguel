import React, { Component } from "react";
import PropTypes from "prop-types";

/** Core */
import Button from "../../core/Button";

class Table extends Component {
  state = {
    currentValue: ""
  };

  render() {
    const { characterList } = this.props;
    return (
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Species</th>
            <th scope="col">Gender</th>
            <th scope="col">Homeworld</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {characterList.map(item => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.species}</td>
              <td>{item.gender}</td>
              <td>{item.homeworld}</td>
              <td>
                <div
                  className="btn-group btn-group-sm"
                  role="group"
                  aria-label="Actions"
                >
                  <Button type="Button" className="btn btn-secondary">
                    <i className="fa fa-pencil" aria-hidden="true" /> Edit
                  </Button>
                  <Button type="Button" className="btn btn-danger">
                    <i className="fa fa-trash-o" aria-hidden="true" /> Remove
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  characterList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      gender: PropTypes.string,
      homeworld: PropTypes.string
    })
  )
};

export default Table;
