import React from "react";
import styled from "styled-components";
import FooterImage from "../images/Acknowledge-Background-Image.png";

const Image = styled.img`
  width: 95vw;
  max-width: 960px;
  display: block;

  margin-left: auto;
  margin-right: auto;
  background-color: none;
`;

const Container = styled.div`
  display: block;

  margin-left: auto;
  margin-right: auto;
`;

const Footer = () => {
  return (
    <Container>
        <Image
          src={FooterImage}
          alt="Gumbaynggirr acknowledgement"
        />
    </Container>
  );
};

export default Footer;