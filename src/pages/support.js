import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import "../App.css";

import Footer from "../components/footer";

import BgImage01 from "../images/BGone.jpg";
import Donate from "../images/donate_3.png";

const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ParallaxCont = styled.div`
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

const TextBox = styled.div`
  display: block;
  margin: 15px auto;
  padding: 15px;
  background: rgb(255, 255, 255, 0.9);
  border-radius: 5px;
  max-width: 95vw;
  text-align: center;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    max-width: 1000px;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 1200px;
  }
`;

const Icon = styled.img`
  width: 45vw;
  padding: 1vw;
  opacity: 1;
  margin: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    max-width: 200px;
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Support = () => {
  return (
    <Container>
      <Parallax bgImage={BgImage01} strength={-200}>
        <ParallaxCont>
          <TextBox>
            <Title>Donate</Title>
            <p>
              The Biodiversity Embassy was initiated by Mark Graham five years
              ago and is attached to the Bellingen Environment Centre’s Citizen
              Science Program. You will be donating to the Biodiversity Embassy
              and funds will be used to care for people working on the front
              line to identify Threatened Species and their Habitat. Funds will
              also be used to continue the information and evidence gathering
              about our precious remaining Fauna and Flora.
              <br />
              <br />
              Please give generously by bank transfer:
              <br />
              <br />
              <b>Name:</b> Bellingen Environment Centre
              <br />
              <b>BSB:</b> 533000
              <br />
              <b>Account:</b> 32804671
              <br />
              <br />
              If you could put "BE" in your transfer description this would
              greatly help out our secretary.
              <br />
              <br />
              You can also donate directly through our Square profile by
              clicking the button below.
            </p>
            <a
              href="https://square.link/u/zLWAws45"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Donate} alt="Donate Icon" />
            </a>
          </TextBox>
        </ParallaxCont>
        <Footer />
      </Parallax>
    </Container>
  );
};

export default Support;
