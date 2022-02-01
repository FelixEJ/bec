import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import breakpoints from "./breakpoints";

import FooterImage from "../images/Acknowledge-Background-Image.png";
import BgImage02 from "../images/zero.jpg";

const Image = styled.img`
  width: 95vw;
  max-width: 960px;
  display: block;

  margin-left: auto;
  margin-right: auto;
  background-color: none;

  @media only screen and ${breakpoints.device.lg} {
    width: 45vw;
  }
`;

const Container = styled.div`
  display: block;

  margin-left: auto;
  margin-right: auto;

  @media only screen and ${breakpoints.device.lg} {
    margin-left: 1vw;
    margin-right: 1vw;
    margin-top: -40vh;
    float: left;
    width: 25vw;
  }
`;

const BottomBackgroundImage = styled.div`
  background-color: none;
  margin: 1% 0% 1% 0%;
  column-count: 1;
  column-gap: 1%;
`;

const Footer = () => {
  return (
    <Container>
      <Parallax bgImage={BgImage02} strength={200}>
        <BottomBackgroundImage>
          <Image src={FooterImage} alt="Gumbaynggirr acknowledgement" />
        </BottomBackgroundImage>
      </Parallax>
    </Container>
  );
};

export default Footer;
