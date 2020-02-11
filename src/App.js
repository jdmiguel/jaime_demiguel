import React from "react";
import { Route } from "react-router-dom";

/** Components */
import Header from "./components/Header";
import ListView from "./components/ListView";
import NewCharacter from "./components/NewCharacter";

const App = () => (
  <div className="App">
    <Header />
    <div className="container">
      <Route exact path="/" component={ListView} />
      <Route exact path="/newCharacter" component={NewCharacter} />
    </div>
  </div>
);

export default App;
