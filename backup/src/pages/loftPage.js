import React from "react";
import styled from "styled-components";
import breakpoints from "../components/breakpoints";
import { Parallax } from "react-parallax";
import "../App.css";

import NavBar from "../components/navbar";
import HorizButtonBar from "../components/horizButtonBar";
import Footer from "../components/footer";
import BgImage01 from "../images/one.jpg";

const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;

  max-width: 1200px;
`;

const TopBackgroundImage = styled.div`
  background-color: none;
  margin: 0 0% 1% 0%;
  column-count: 1;
  column-gap: 1%;
  margin-top: 5vh;
  min-height: 90vh;

  @media only screen and ${breakpoints.device.md} {
  }
  @media only screen and ${breakpoints.device.lg} {
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;
const Subtitle = styled.div`
  font-size: 1.5em;
  text-transform: uppercase;
  text-align: center;
`;

const Text = styled.div`
  background-color: rgba(200, 200, 200, 0.9);
  padding-left: 2vh;
  padding-right: 2vh;
  margin-left: 2vh;
  margin-right: 2vh;
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Loft = () => {
  return (
    <Container>
      <NavBar />
      <Parallax bgImage={BgImage01} strength={-200}>
        <TopBackgroundImage>
          <Text>
            <Title>the loft for hire</Title>
            <Subtitle>
              Unfortunately due to Covid-19 we currently have limitations on the
              hiring of the loft.
            </Subtitle>
            <Subtitle>
              Supporting local environmental groups since 1990
            </Subtitle>
            <p>
              The Sustainable Earth Project’s building at 1 Church Street,
              Bellingen was built by the Bellingen community in 1990.
              <br />
              <br />
              The BEC occupies the loft space in this building and provides a
              meeting place to discuss matters pertaining to the environment and
              facilities for community members working in the field of
              environmental issues.
              <br />
              <br />
              We also make our premises available to other community groups and
              individuals promoting sustainable buildings, human care and
              wellbeing and make our facilities available to people seeking
              information on the state of the environment through our knowledge,
              our library and our communication facilities. <br />
              <br />
              The BEC provides noticeboards, for groups to share contacts,
              events and information. The BEC loft is available to book for
              community groups with priority given to those working for the
              environment.
            </p>
            
          </Text>
          <Footer/>
        </TopBackgroundImage>{" "}
      </Parallax>
      
    </Container>
  );
};

export default Loft;
