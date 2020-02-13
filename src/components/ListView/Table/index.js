import React from "react";
import PropTypes from "prop-types";

const Table = ({
  characterList,
  onEditCharacter,
  onRemoveCharacter,
  onSortByCharacter
}) => (
  <table className="table table-bordered table-hover">
    <thead className="thead-light">
      <tr>
        <th scope="col">
          <button
            type="button"
            className="btn btn-light w-100"
            onClick={() => {
              onSortByCharacter("id");
            }}
          >
            Id
          </button>
        </th>
        <th scope="col">
          <button
            type="button"
            className="btn btn-light w-100"
            onClick={() => {
              onSortByCharacter("name");
            }}
          >
            Name
          </button>
        </th>
        <th scope="col">
          <button
            type="button"
            className="btn btn-light w-100"
            onClick={() => {
              onSortByCharacter("species");
            }}
          >
            Species
          </button>
        </th>
        <th scope="col">
          <button
            type="button"
            className="btn btn-light w-100"
            onClick={() => {
              onSortByCharacter("gender");
            }}
          >
            Gender
          </button>
        </th>
        <th scope="col">
          <button
            type="button"
            className="btn btn-light w-100 h-100"
            onClick={() => {
              onSortByCharacter("homeworld");
            }}
          >
            Homeworld
          </button>
        </th>
        <th scope="col" className="text-center align-middle">
          Actions
        </th>
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
  onRemoveCharacter: PropTypes.func,
  onSortByCharacter: PropTypes.func
};

export default Table;
