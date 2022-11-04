import React from "react";
import { Routes ,Route } from 'react-router-dom';

import Index from "../pages/index";
import About from "../pages/about";
import BlueBerries from "../pages/campBBerries";
import KoalaNationalPark from "../pages/campGKNP";
import KalangHeadwaters from "../pages/campKalang";
import History from "../pages/history";
import Membership from "../pages/membership";
import Support from "../pages/support";

const PageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/BlueBerries" element={<BlueBerries/>}></Route>
        <Route path="/GreatKoalaNationalPark" element={<KoalaNationalPark/>}></Route>
        <Route path="/KalangHeadwaters" element={<KalangHeadwaters/>}></Route>
        <Route path="/history" element={<History/>}></Route>
        <Route path="/membership" element={<Membership/>}></Route>
        <Route path="/support" element={<Support/>}></Route>
      </Routes>
    </div>
  );
};

export default PageRoutes;
