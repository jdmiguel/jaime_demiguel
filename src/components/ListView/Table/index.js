import React from "react";
import PropTypes from "prop-types";

const Table = ({ characterList, onEditCharacter, onRemoveCharacter }) => (
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
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  onEditCharacter(item.id);
                }}
              >
                <i className="fa fa-pencil" aria-hidden="true" /> Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  onRemoveCharacter(item.id);
                }}
              >
                <i className="fa fa-trash-o" aria-hidden="true" /> Remove
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  characterList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      gender: PropTypes.string,
      homeworld: PropTypes.string
    })
  ),
  onEditCharacter: PropTypes.func,
  onRemoveCharacter: PropTypes.func
};

export default Table;
