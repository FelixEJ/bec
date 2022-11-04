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
import BECBanner from "../images/BEC_Banner.jpg";
import BECBannerMini from "../images/BEC_Banner_mini.jpg";

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
            <Image>
              <ProgressiveImage
                src={BECBanner}
                placeholderSrc={BECBannerMini}
                alt="Banner showing endangered quoll with text 'Baalijin - Gumbaynggir Country' #EndNativeForestLogging"
              />
            </Image>
            <Statement />
          </MidContainer>
        </ParallaxCont>
        <Footer />
      </Parallax>
    </Container>
  );
};

export default Index;
