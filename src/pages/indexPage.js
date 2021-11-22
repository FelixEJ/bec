import React from "react";
import styled from "styled-components";
import "../App.css";
import Footer from "../components/footer";
import SwipeableTextMobileStepper from "../components/slider";
import HorizButtonBar from "../components/horizButtonBar";
import Statement from "../components/statement"
import { Parallax } from "react-parallax";
import BgImage01 from "../images/one.jpg";
import BgImage02 from "../images/zero.jpg";

const Container = styled.div`
  text-align: center;
  z-index: -1;
  background-color: none;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  display: block;
  margin-left: auto;
  margin-right: auto;

  max-width: 100vw;
`;
const BackgroundImageBox1Col = styled.div`
  background-color: none;
  margin: 1% 0% 1% 0%;
  column-count: 1;
  column-gap: 1%;
`;

const Index = () => {
  return (
    <Container>
      <Parallax bgImage={BgImage01} strength={-200}>
        <BackgroundImageBox1Col>
          <SwipeableTextMobileStepper />
        </BackgroundImageBox1Col>
        <HorizButtonBar />
      </Parallax>
      <Parallax bgImage={BgImage02} strength={200}>
        <BackgroundImageBox1Col>
          <Statement />
          <Footer />
        </BackgroundImageBox1Col>
      </Parallax>
    </Container>
  );
};

export default Index;
