import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import breakpoints from "./breakpoints";

import FooterImage from "../images/Acknowledge-Background-Image.png";
import BgImage02 from "../images/zero.jpg";

const Container = styled.div`
  display: block;

  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  background-color: #3c763d;
`;

const Text = styled.div`
  color: white;
  max-width: 60vw;
  display: block;

  margin-left: auto;
  margin-right: auto;
`;

const Footer = () => {
  return (
    <Container>
      <Text>
        We acknowledge and pay our respects to the traditional custodians of the
        lands and waters of the Gumbaynggirr, and all Aboriginal Elders, past,
        present, and emerging.
      </Text>
    </Container>
  );
};

export default Footer;
