import React from "react";
import { Route } from "react-router-dom";

/** Components */
import Header from "./components/Header";
import ListView from "./components/list-view/ListView";

const App = () => (
  <div className="App">
    <Header />
    <div className="container">
      <Route exact path="/" component={ListView} />
    </div>
  </div>
);

export default App;
