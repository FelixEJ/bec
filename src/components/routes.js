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
          <Route path="/contactPage" component={Contact}></Route>
          <Route path="/historyPage" component={History}></Route>
          <Route path="/aboutPage" component={About}></Route>
          <Route path="/blueberryPage" component={Blueberry}></Route>
          <Route path="/communityPage" component={Community}></Route>
          <Route path="/gknpPage" component={GKNP}></Route>
          <Route path="/helpPage" component={Help}></Route>
          <Route path="/kalangPage" component={Kalang}></Route>
          <Route path="/loftPage" component={Loft}></Route>
          <Route path="/statementPage" component={Statement}></Route>
          <Route path="/supportPage" component={Support}></Route>
        </Switch>
    </Router>
  );
};

export default Routes;
