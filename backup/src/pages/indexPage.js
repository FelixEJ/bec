import React from "react";
import styled from "styled-components";
import breakpoints from "../components/breakpoints";
import { Parallax } from "react-parallax";
import "../App.css";

import Footer from "../components/footer";
import SwipeableTextMobileStepper from "../components/slider";
import HorizButtonBar from "../components/horizButtonBar";
import Statement from "../components/statement";
import NavBar from "../components/navbar";

import BgImage01 from "../images/one.jpg";
import BgImage02 from "../images/zero.jpg";

const Container = styled.div`
  text-align: center;
  z-index: -1;

  display: block;
  margin-left: auto;
  margin-right: auto;

  max-width: 100vw;
`;
const TopBackgroundImage = styled.div`
  background-color: none;
  margin: 1% 0% 1% 0%;
  height: 80vh;

  @media only screen and ${breakpoints.device.md} {
    height: 55vh;
  }
  @media only screen and ${breakpoints.device.lg} {
    max-height: 1000px;
  }
`;

const BottomBackgroundImage = styled.div`
  background-color: none;
  column-count: 1;
  column-gap: 1%;
  margin-top: 5vh;
`;

const Index = () => {
  return (
    <Container>
      <NavBar />      
      <Parallax bgImage={BgImage01} strength={-200}>
        <TopBackgroundImage>
          <SwipeableTextMobileStepper />
          <HorizButtonBar />
        </TopBackgroundImage>
      </Parallax>
      <Parallax bgImage={BgImage02} strength={200}>
        <BottomBackgroundImage>
          <Statement />
          <Footer />
        </BottomBackgroundImage>
      </Parallax>
    </Container>
  );
};

export default Index;
