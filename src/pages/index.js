import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import ProgressiveImage from "../components/progressiveImage";
import "../App.css";

import Slider from "../components/slider";
import Footer from "../components/footer";
import HorizButtonBar from "../components/horizButtonBar";
import Statement from "../components/statement";

import BgImage01 from "../images/BGone.jpg";
import PlantFairVacancy from "../images/plant_fair_vacancy.jpg"
import BECBanner from "../images/BEC_Banner.jpg";
import BECBannerMini from "../images/BEC_Banner_mini.jpg";
import PlantFair from "../images/PlantFairSpring2024.png";
import PlantFairMini from "../images/PlantFairSpring2024_mini.jpg";

const Container = styled.div`
  text-align: center;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ParallaxCont = styled.div`
  min-height: 100vh;
`;

const Image = styled.div`
  max-width: 95vw;
  width: 350px;
  margin: 20px 20px;
  border-radius: 5px;
  @media only screen and (min-width: 480px) {
    max-width: 75vw;
    width: 400px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    max-width: 50vw;
    width: 600px;
  }
  @media only screen and (min-width: 1600px) {
    width: 600px;
  }
`;

const MidContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    flex-flow: row nowrap;
    max-width: 95vw;
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Link = styled.a`
  color: #284124;
  text-decoration: underline;
  padding: 0 5px;
`;

const Flyer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  width: 400px;
  overflow: hidden;
  background: cream;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Text = styled.div`
  width: 90vw;
  max-width: 500px;
  text-align: center;
  margin: 15px;
  padding: 15px;
  background: rgb(14, 120, 8, 0.9);
  border-radius: 5px;
  text-decoration: none;
  color: white;
  font-size: 20px;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    max-width: 300px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 400px;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 500px;
  }
`;

const Subtitle = styled.h3`
  text-align: center;
  color: white;
  font-size: 40px;
`;

const Index = () => {
  return (
    <Container>
      <Parallax
        bgImage={BgImage01}
        bgImageAlt="the canopy of the Kalang forest"
        strength={-200}
        blur={1}
      >
        <ParallaxCont>
          <Slider />
          <HorizButtonBar />
          <MidContainer>
            <Link
              href="https://bellingenplantfair.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {/* <Flyer>
                <Text>
                  <Subtitle>Autumn Plant Fair</Subtitle>
                9th March 2024
                <br/><br/>35th Anniversary
                <br/><br/>Click HERE for more info
                <br/>Volunteer enquiries please email bellingenplantfair@gmail.com
                </Text>
              </Flyer> */}
              <Image>
                <ProgressiveImage
                  src={BECBanner}
                  placeholderSrc={BECBannerMini}
                  alt="Poster showing native animal in tree with #EndNativeForestLogging"
                  // alt="Banner showing endangered quoll with text 'Baalijin - Gumbaynggir Country' #EndNativeForestLogging"
                />
              </Image>
            </Link>
            <Statement />
          </MidContainer>
        </ParallaxCont>
        <Footer />
      </Parallax>
    </Container>
  );
};

export default Index;
