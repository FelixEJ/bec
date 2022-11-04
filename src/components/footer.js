import React from "react";
import styled from "styled-components";
import "../App.css";

import logo from "../images/logo_light.png";
import BEC from "../images/BEC_light.png";
import fbLogo from "../images/fb_logo.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  background-color: #284124;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    flex-flow: row nowrap;
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-bottom: 20px;
`;

const Logo = styled.img`
  order: 1;
  flex-basis: 29%;
  max-width: 150px;
  margin: 2vh 2vw 2vh 2vw;

  @media only screen and (max-width: 1100px) {
    max-width: 100px;
  }
`;

const TextSectionMid = styled.div`
  order: 2;
  flex-basis: 29%;
  padding: 0 15px;
`;
const TextSectionEnd = styled.div`
  order: 3;
  flex-basis: 29%;
`;

const Heading = styled.div`
  font-size: 1.5em;
  text-transform: uppercase;
  color: white;
  margin-top: 20px;
  text-align: center;
`;

const Text = styled.div`
  font-size: 1em;
  color: white;
  text-align: center;
`;
const Link = styled.span`
  font-size: 1em;
  text-decoration: underline;
`;

const Footer = () => {
  return (
    <Container>
      <div id="footer" />      
      <TextSectionMid>
        <Text>
          We acknowledge and pay our respects to the traditional custodians of
          the lands and waters of the Gumbaynggirr, and all Aboriginal Elders,
          past, present, and emerging.
        </Text>
      </TextSectionMid>
      <LogoContainer>
        <Logo src={logo} alt="BEC logo" />
        <Logo src={BEC} alt="BEC title image" />
      </LogoContainer>
      <TextSectionEnd>
        <Heading>contact us</Heading>
        <Text>
          <p>
            <a id="phone" href="tel:+61439924890">
              <Link>0439 924 890</Link>
            </a>
          </p>
          <p>
            <a href="mailto: bellingenec@gmail.com">
              <Link>bellingenec@gmail.com</Link>
            </a>
          </p>
          <a
            href="https://www.facebook.com/BellingenEnvironmentCentre"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={fbLogo} alt="facebook logo" height="60px"></img>
          </a>
        </Text>
      </TextSectionEnd>
    </Container>
  );
};

export default Footer;
