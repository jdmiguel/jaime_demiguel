import React, { Component, Fragment } from "react";

/** Core */
import Title from "../core/Title";

/** Components */
import Finder from "./Finder";
import Table from "./Table";
import Pagination from "./Pagination";

/** Service */
import { getCharactersService } from "../../services/api";

class ListView extends Component {
  state = {
    characterList: []
  };

  componentDidMount() {
    this.getCharactersByPage(1);
  }

  getCharactersByPage = page => {
    getCharactersService(page).then(response => {
      this.setState({
        characterList: response
      });
    });
  };

  render() {
    const { characterList } = this.state;
    return (
      <Fragment>
        <Title>List View</Title>
        <Finder />
        <Table characterList={characterList} />
        <Pagination getCharacters={page => this.getCharactersByPage(page)} />
      </Fragment>
    );
  }
}

export default ListView;
