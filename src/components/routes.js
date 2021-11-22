import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./navbar";
import BurgerMenu from "./burgerMenu";

import Index from "../pages/indexPage";
import Contact from "../pages/contactPage";
import Blank from "../pages/blankPage";

const Routes = () => {
  return (
    <Router>
      <BurgerMenu />
      {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route path="/contactPage" component={Contact}></Route>
          <Route path="/blankPage" component={Blank}></Route>
        </Switch>
    </Router>
  );
};

export default Routes;
