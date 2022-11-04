import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";

import LandingPortrait from "../images/landing_portrait.jpg";
import LandingLandscape from "../images/landing_landscape.jpg";
import LogoImage from "../images/logo.png";

let pageWidth = window.screen.availWidth;
let pageHeight = window.screen.availHeight;

const LandingBackground = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  height: 100vh;
  width: 100vw;
  background: rgb(255, 255, 255, 0.6);

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    flex-flow: row nowrap;
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Logo = styled.img`
  width: 80vw;
  background: rgb(200, 200, 0, 0.1);
  @media only screen and (min-width: 480px) {
    width: 40vw;
  }
  @media only screen and (min-width: 768px) {
    width: 50vw;
  }
  @media only screen and (min-width: 1024px) {
    width: 30vw;
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Motto = styled.h2`
  width: 80vw;
  text-align: center;
  font-size: 100%;
  background: rgb(100, 0, 100, 0.1);

  background-image: radial-gradient(
    circle,
    white,
    rgb(255, 255, 255, 0.6),
    rgb(255, 255, 255, 0.3)
  );
  border-radius: 20px;
  margin: 15px 0;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    width: 30vw;
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const Landing = () => {
  var bgIm;
  if (pageWidth > pageHeight) {
    bgIm = LandingLandscape;
  } else {
    bgIm = LandingPortrait;
  }
  return (
    <>
      <Parallax bgImage={bgIm} bgImageSize="width: 100vw;" strength={200}>
        <LandingBackground>
          <Motto>
            <h2>Business is the best in the business for 20+ years.</h2>
            <h2><Link id="phone" href="tel:+61256168426">
          1234567890</Link></h2>
            <h2><Link href="mailto: info@cel.org.au">
          info@business.com</Link></h2>
          <h2><Link href="https://goo.gl/maps/xwLV4mbH2pAE21c9A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Business Town NSW 2000</Link></h2>
          </Motto>
          <Logo src={LogoImage} />
        </LandingBackground>
      </Parallax>
    </>
  );
};

export default Landing;
