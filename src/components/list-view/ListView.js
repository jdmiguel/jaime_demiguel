import React, { Component, Fragment } from "react";

/** Core */
import Title from "../core/Title";

/** Components */
import Finder from "./Finder";
import Table from "./Table";
import Pagination from "./Pagination";

/** Service */
import {
  getCharactersService,
  getCharactersBySearchService
} from "../../services/api";

const MsgNotFound = () => <p>No Results Found</p>;

class ListView extends Component {
  state = {
    characterList: [],
    currentPage: 1
  };

  componentDidMount() {
    this.getCharactersByPage(1);
  }

  getCharactersByPage = page => {
    getCharactersService(page).then(response => {
      this.setState({
        characterList: response,
        currentPage: page
      });
    });
  };

  getCharactersBySearch = query => {
    if (query.length) {
      setTimeout(() => {
        getCharactersBySearchService(query).then(response => {
          this.setState({
            characterList: response
          });
        });
      }, 200);
    } else {
      this.getCharactersByPage(this.state.currentPage);
    }
  };

  render() {
    const { characterList } = this.state;
    return (
      <Fragment>
        <Title>List View</Title>
        <Finder getCharacters={query => this.getCharactersBySearch(query)} />
        {characterList.length ? (
          <Table characterList={characterList} />
        ) : (
          <MsgNotFound />
        )}
        <Pagination getCharacters={page => this.getCharactersByPage(page)} />
      </Fragment>
    );
  }
}

export default ListView;
