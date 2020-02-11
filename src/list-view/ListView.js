import React, { Fragment } from "react";

/** Core */
import Title from "../core/Title";

/** Components */
import Finder from "./Finder";
import Table from "./Table";
import Pagination from "./Pagination";

function ListView() {
  return (
    <Fragment>
      <Title>List View</Title>
      <Finder />
      <Table />
      <Pagination />
    </Fragment>
  );
}

export default ListView;
