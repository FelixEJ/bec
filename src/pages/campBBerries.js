import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import "../App.css";
import ProgressiveImage from "../components/progressiveImage";

import Footer from "../components/footer";

import BgImage01 from "../images/BGone.jpg";
import Map from "../images/IntensiveAgriculture/map.jpg";
import Chemicals from "../images/IntensiveAgriculture/chemicals.jpg";
import Floods from "../images/IntensiveAgriculture/flooded.jpg";
import MapMini from "../images/IntensiveAgriculture/map_mini.jpg";
import ChemicalsMini from "../images/IntensiveAgriculture/chemicals_mini.jpg";
import FloodsMini from "../images/IntensiveAgriculture/flooded_mini.jpg";

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

const Image = styled.div`
  max-width: 100%;
  display: block;
  margin: 15px auto;
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

const Link = styled.a`
  color: #284124;
  text-decoration: underline;
`;

const BlueBerries = () => {
  return (
    <Container>
      <Parallax bgImage={BgImage01} strength={-200}>
        <ParallaxCont>
          <TextBox>
            <Title>Intensive Agriculture Campaign/ Blueberries</Title>
            <Subtitle>
              Intensive Plant Agriculture needs Local Government Development
              Application Approval
            </Subtitle>
            <p>
              The Bellingen Environment Centre is concerned about all Intensive
              Plant Agriculture Operations across our region and in particular,
              the Bellingen Shire. These crops can use polluting chemicals to
              our waterways and their water use needs to be carefully regulated.
            </p>

            <p>
              Early in 2017 the Bellingen Environment Centre (BEC) was alerted
              to broadscale land clearing at Valery which would pollute Pine
              Creek. The trees logged were also a part of the Bellingen Shire
              Koala Management Plan. These trees were cleared to make way for
              the first Blueberry Farm and later two more farms were established
              in the Bellingen Shire.
            </p>
            <Image>
              <ProgressiveImage
                src={Map}
                placeholderSrc={MapMini}
                alt="Map of the blueberry farms near Pine Creek"
              />
            </Image>
            <p>
              <i>
                “Within weeks the forest was all cleared, the rows were ploughed
                almost to the edge of the Pine Creek, the Core Koala Habitat was
                gone. There were no siltation barriers in place. In March the
                rains came and once again the erosive destruction and pollution
                of Pine Creek continued on a massive scale.”
              </i>
            </p>
            <p>
              Blueberries were proliferating across the Mid North Coast and
              residents from Coffs Harbour, Grafton and Nambucca Heads concerned
              about spray drift and water pollution from highly poisonous
              chemicals attended the first of three meetings in March 2017
              organised by the BEC in Bellingen. Industry Representatives and
              farmers from the Blueberry Industry also attended the meetings.
            </p>
            <Image>
              <ProgressiveImage
                src={Chemicals}
                placeholderSrc={ChemicalsMini}
                alt="Toxic and flammable chemicals used in intensive agriculture"
              />
            </Image>
            <p>
              BEC formed an outreach group in Coffs Harbour in 2018 of active
              residents called the IPA (Intensive Plant Agriculture” group which
              was incorporated in 2020. These residents ran a passionate and
              well evidenced campaign and prepared a broadscale petition across
              the Coffs Harbour Shire to require any Intensive Agriculture
              operation to apply for a DA. The motion was voted against by Coffs
              Harbour Council.
            </p>
            <p>
              A study by Southern Cross University “Investigating Water Quality
              in Coffs Coastal Estuaries” July 2018 was aware of the damage that
              chemical runoff from development and Blueberry farming was having
              on Hearnes Lake and the dying forests surrounding it.
            </p>
            <Image>
              <ProgressiveImage
                src={Floods}
                placeholderSrc={FloodsMini}
                alt="Toxic and flammable chemicals used in intensive agriculture"
              />
            </Image>
            <p>
              It is a testament to our own complacency and the corruption of the
              NSW Government regulatory systems that Hearnes Lake often
              described as the lungs of the Solitary Islands is now closed
              because it is dead from chemical pollution.
            </p>
            <p>
              It is vital that immediate funding is made available to restore
              Hearne’s Lake and that any new development requires a Local
              Government DA. The Federal Department of Agriculture should halt
              the use of poisons banned overseas from the list of chemicals
              allowed in the growing of any Intensive Plant Agriculture in NSW
              for the sake of human health and to restore damaged land and
              waterways.
            </p>
            <p>Caroline Joseph, for the BEC</p>
          </TextBox>
        </ParallaxCont>
        <Footer />
      </Parallax>
    </Container>
  );
};

export default BlueBerries;
