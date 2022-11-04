import React from "react";
import styled from "styled-components";

import facebook from "../images/fb_logo.png";
import insta from "../images/insta_logo.png";
import maps from "../images/maps_logo.png";

const Container = styled.div`
  display: block;

  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: centre;

  width: 90vw;
  margin: 15px 0;
`;

const SocialLink = styled.a`
width: 30%;
margin: auto;
display: flex;
justify-content: center;
`;

const Icon = styled.img`
max-width: 30%;
`;

const Socials = () => {
  return (
    <Container>
      <FlexContainer>
          <SocialLink
            href="https://www.facebook.com/tishfaco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={facebook} alt="facebook logo"></Icon>
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/tishfaco/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={insta} alt="instagram logo"></Icon>
          </SocialLink>
          <SocialLink
            href="https://goo.gl/maps/xwLV4mbH2pAE21c9A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={maps} alt="google maps logo"></Icon>
          </SocialLink>
      </FlexContainer>
    </Container>
  );
};

export default Socials;
