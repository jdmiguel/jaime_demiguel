import React from "react";
import { Route } from "react-router-dom";

/** Components */
import Header from "./Header";
import ListView from "./list-view/ListView";

const App = () => (
  <div className="App">
    <Header />
    <div className="container">
      <Route exact path="/" component={ListView} />
    </div>
  </div>
);

export default App;
