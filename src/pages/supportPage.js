import React from "react";
import styled from "styled-components";
import breakpoints from "../components/breakpoints";
import { Parallax } from "react-parallax";
import "../App.css";

import NavBar from "../components/navbar";
import HorizButtonBar from "../components/horizButtonBar";
import Footer from "../components/footer";

import BgImage01 from "../images/one.jpg";
import Donate from "../images/donate_3.png";

const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  max-width: 100%;
`;

const TopBackgroundImage = styled.div`
  background-color: none;
  margin-top: 5vh;

  @media only screen and ${breakpoints.device.md} {
    max-height: 650px;
  }
  @media only screen and ${breakpoints.device.lg} {
    max-height: 1000px;
  }
`;

const Text = styled.div`
  background-color: rgba(200, 200, 200, 0.9);
  padding: 2vh;
  margin: 2vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;

  max-width: 1200px;
`;

const Icon = styled.img`
  width: 45vw;
  padding: 1vw;
  opacity: 1;
  margin: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media only screen and ${breakpoints.device.md} {
    max-width: 200px;
  }
`;

const Title = styled.h1`
text-align: center;
`;

const Support = () => {
  return (
    <Container>
      <NavBar />
      <Parallax bgImage={BgImage01} strength={0}>
        <TopBackgroundImage>
          <Text>
            <Title>Donate</Title>
            <p>
            The Biodiversity Embassy was initiated by Mark Graham five years ago and is attached to the Bellingen Environment Centre’s Citizen Science Program.  You will be donating to the Biodiversity Embassy and funds will be used to care for people working on the front line to identify Threatened Species and their Habitat.  Funds will also be used to continue the information and evidence gathering about our precious remaining Fauna and Flora.
            <br/>
            <br/>
            Please give generously by bank transfer:
            <br/>
            Name: Bellingen Environment Centre
            <br/>
            BSB: 2222222
            <br/>
            If you could put "BE" in your transfer description this would greatly help out our secretary.
            <br/>
            <br/>
            You can also donate directly through our Square profile by clicking the button below.
            </p>
            <a href="https://square.link/u/zLWAws45" target="_blank" rel="noopener noreferrer">
              <Icon src={Donate} alt="Donate Icon" />
            </a>
          </Text>
        </TopBackgroundImage>
      </Parallax>
      <Footer />
    </Container>
  );
};

export default Support;
