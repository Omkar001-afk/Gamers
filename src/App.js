import React from "react";
import Home from "./component/pages/Home";
import GlobalStyles from "./component/GlobalStyle/GlobalStyle";
import { Route } from "react-router";
import Nav from "./component/pages/Nav";

const App = () => {
  return (
    <div className="App">
      <Route path={["/games/:id", "/"]}>
        <GlobalStyles />
        <Nav />
        <Home />
      </Route>
    </div>
  );
};

export default App;
