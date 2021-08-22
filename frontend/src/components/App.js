import React from "react";
import "../assets/App.css";
import NavbarInbuilt from "./NavbarInbuilt";
import HomePage1 from "./HomePage1";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import ErrorPage from "./ErrorPage";
import { Switch, Route } from "react-router-dom";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <React.Fragment>
      <NavbarInbuilt />
      <Switch>
        <Route exact path="/">
          <HomePage1 />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default App;
