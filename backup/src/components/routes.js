import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./navbar";
import BurgerMenu from "./burgerMenu";

import Index from "../pages/indexPage";
import Contact from "../pages/contactPage";
import History from "../pages/historyPage";
import About from "../pages/aboutPage";
import Blueberry from "../pages/blueberryPage";
import Community from "../pages/communityPage";
import GKNP from "../pages/gknpPage";
import Help from "../pages/helpPage";
import Kalang from "../pages/kalangPage";
import Loft from "../pages/loftPage";
import Statement from "../pages/statementPage";
import Support from "../pages/supportPage";

const Routes = () => {
  return (
    <Router>
      <BurgerMenu />
      {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/history" component={History}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/blueberry" component={Blueberry}></Route>
          <Route path="/community" component={Community}></Route>
          <Route path="/gknp" component={GKNP}></Route>
          <Route path="/help" component={Help}></Route>
          <Route path="/kalang" component={Kalang}></Route>
          <Route path="/loft" component={Loft}></Route>
          <Route path="/statement" component={Statement}></Route>
          <Route path="/support" component={Support}></Route>
        </Switch>
    </Router>
  );
};

export default Routes;
