import * as React from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/navbar";
import BurgerMenu from "./components/burgerMenu";
import PageRoutes from "./components/routes";
import Header from "./components/header";
import ScrollTop from "./components/scrollTopButton";

const Page = styled.div`
  background: none;
`;

function App() {
  return (
    <Page>
      <Header />
      <BurgerMenu />
      <Navbar />
      <PageRoutes />
      <ScrollTop />
    </Page>
  );
}

export default App;
