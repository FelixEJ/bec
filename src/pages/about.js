import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import "../App.css";

import Footer from "../components/footer";

import BgImage01 from "../images/BGone.jpg";

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

const Subtitle = styled.h3`
  font-size: 1.2em;
  text-transform: uppercase;
  text-align: center;
`;

const TextBox = styled.div`
  display: block;
  margin: 15px auto;
  padding: 15px;
  background: rgb(255, 255, 255, 0.9);
  border-radius: 5px;
  max-width: 95vw;

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

const About = () => {
  return (
    <Container>
      <Parallax bgImage={BgImage01} strength={-200}>
        <ParallaxCont>
          <TextBox>
            <Title>About the BEC</Title>
            <p>
              The BEC was formed in 1989 in response to the growing awareness
              that to deal with environmental issues, members of the community
              needed to work through an organisation to achieve the maximum
              benefit for the environment. It was also seen as essential that
              the organisation become incorporated to take its responsibility
              seriously and to formalise the structure, accountability and
              liability of the organisation.
            </p>
            <Subtitle>AIMS</Subtitle>
            <p>The Bellingen Environment Centre committee works towards:</p>
            <ul>
              <li>Promotion of the cause of environmental issues</li>
              <li>
                Protection of the natural environment and biodiversity of the
                Bellinger Valley.
              </li>
              <li>
                Fostering proactive responses to climate change with a
                commitment to non-violent action principles.
              </li>
            </ul>
            <Subtitle>MEMBERS</Subtitle>
            <p>
              With its many members the Bellingen Environment Centre is one of
              the major community organisations in the region, with the projects
              it undertakes being supported by a large number of people. Apart
              from the direct involvement with the BEC, many of our members also
              make a personal contribution in Land-care, Dune-care, and
              River-care Groups in our Shire.
            </p>
            <Subtitle>FUNDING</Subtitle>
            <p>
              The BEC is funded by membership fees, member contributions, and
              our twice yearly fund-raiser, the Plant Fair. We are a major
              share-holder in the Sustainable Earth Project, by donation of
              shares by our members, and as a share-holder we are also
              responsible for the commercial loans towards the Solar
              Installation on our building.
            </p>
            <Subtitle>SUPPORTING OTHER GROUPS</Subtitle>
            <p>
              The BEC on many occasions has financially supported other
              like-minded groups. The Bellingen Environment Centre committee
              holds the lease on the loft at the building in Church Street which
              was built by the Community 25years ago and is a community shared
              space for people working in the field of environmental issues. In
              recent years the BEC has auspiced the following groups and
              supported them under its umbrella until they were able to
              incorporate:
            </p>
            <ul>
              <li>Transition Bellingen</li>
              <li>Bellingen Seedsavers</li>
              <li>Belingen Eye</li>
              <li>Dorrigo Environment Watch</li>
              <li>Bellinger Estuarine Protection Association</li>
              <li>Bellingen Energy Festival</li>
              <li>Working with Other Groups</li>
            </ul>
            <p>
              The BEC is a full and active member of the Nature Conservation
              Council of NSW and a member of the North Coast Environment
              Council. The BEC is also represented on the Bellingen Shire
              Council’s Coastline & Estuary Management Committee and provides
              the Conservation Representative on the Solitary Islands Marine
              Park Advisory Committee and the State Fisheries Advisory
              Committee, all unpaid positions. We have a close working
              relationship with the National Park Association of NSW, the
              Australian Marine Conservation Society, and the Solitary Islands
              Marine Park Authorities. Our informed opinion is often sought by
              the Media and Authorities.
            </p>
          </TextBox>
        </ParallaxCont>
        <Footer />
      </Parallax>
    </Container>
  );
};

export default About;
