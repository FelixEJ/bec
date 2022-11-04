import React from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProgressiveImage from "../components/progressiveImage";
import { Link } from "react-router-dom";

import Slide01 from "../images/slide_1.jpg";
import Slide02 from "../images/slide_2.jpg";
import Slide03 from "../images/slide_3.jpg";
import Slide04 from "../images/slide_4.jpg";
import Slide05 from "../images/slide_5.jpg";
import Slide01Mini from "../images/slide_1_mini.jpg";
import Slide02Mini from "../images/slide_2_mini.jpg";
import Slide03Mini from "../images/slide_3_mini.jpg";
import Slide04Mini from "../images/slide_4_mini.jpg";
import Slide05Mini from "../images/slide_5_mini.jpg";

const Container = styled.div`
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

const SlideContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin: 10px 0;
`;
const Text = styled.p`
  margin: 10px 0;
`;

const SliderImage = styled.div`
  max-width: 100%;
  width: 320px;
  max-height: 50vh;
  margin: 15px 0;
  @media only screen and (min-width: 480px) {
    width: 650px;
    max-width: 80vw;
  }
  @media only screen and (min-width: 768px) {
    width: 750px;
    max-width: 90vw;
  }
  @media only screen and (min-width: 1024px) {
    width: 950px;
    max-width: 90vw;
  }
  @media only screen and (min-width: 1600px) {
    width: 1150px;
    max-width: 90vw;
  }
`;

const items = [
  <Link to="/history">
    <SlideContainer className="item" data-value="1">
      <Title>Bellingen Environment Centre</Title>
      <SliderImage>
        <ProgressiveImage
          src={Slide01}
          placeholderSrc={Slide01Mini}
          alt="A group of BEC members on a native forests trek."
        />
      </SliderImage>
      <Text>
        Dedicated to the conservation of the natural environment since 1990. The
        BEC was formed in 1989 in response to the growing awareness that to deal
        with environmental issues, members of the community needed to work
        through an organisation to achieve the maximum benefit for the
        environment.
      </Text>
    </SlideContainer>
  </Link>,
  <Link to="/GreatKoalaNationalPark">
    <SlideContainer className="item" data-value="2">
      <Title>The Great Koala National Park</Title>
      <SliderImage>
        <ProgressiveImage
          src={Slide02}
          placeholderSrc={Slide02Mini}
          alt="A koala sits in a tree and stares at the camera."
        />
      </SliderImage>
      <Text>
        The proposed GKNP on paper covers an area from just north of Kempsey in
        the south to Woolgoolga in the north. It roughly runs west from the
        Pacific Highway to as far as a line aligned with the beginning of the
        Dorrigo Plateau in the east.
      </Text>
    </SlideContainer>
  </Link>,
  <Link to="/KalangHeadwaters">
    <SlideContainer className="item" data-value="3">
      <Title>Friends of Kalang Headwater</Title>
      <SliderImage>
        <ProgressiveImage
          src={Slide03}
          placeholderSrc={Slide03Mini}
          alt="A shot of a pristine piece of the Kalang Headwaters creek with crystal clear water and native vegetation."
        />
      </SliderImage>
      <Text>
        In November 2016, residents of the upper Kalang received notice from
        Forestry Corporation of NSW (FCNSW) of planned logging in compartments
        138 to 144 in Oakes and Roses Creek state forests, these compartments
        are along Kelose Road, with the near pristine Roses Creek on one side
        and the upper Kalang River on the other side.
      </Text>
    </SlideContainer>
  </Link>,
  <SlideContainer className="item" data-value="4">
    <Title>Darruyay Yilaaming Gumbaynggida jagunda</Title>
    <SliderImage>
      <ProgressiveImage
        src={Slide04}
        placeholderSrc={Slide04Mini}
        alt="A native river turtle emerges onto fallen sticks in the river."
      />
    </SliderImage>
    The BEC is currently working with the Gumbaynggirr people to protect
    songlines and heritage.
  </SlideContainer>,

  <Link to="/BlueBerries">
    <SlideContainer className="item" data-value="5">
      <Title>The Blueberry Campaign</Title>
      <SliderImage>
        <ProgressiveImage
          src={Slide05}
          placeholderSrc={Slide05Mini}
          alt="A large patch of native forest has been cleared to make way for blueberry fields."
        />
      </SliderImage>
      <Text>
        The Bellingen Environment Centre started working on the Blueberry
        Campaign in 2015 when a local Valery resident notified them of their
        environmental concerns with a 150 acre blueberry farm on the edge of
        Pine Creek. The resident had exhausted every avenue to try and protect
        their local environment...
      </Text>
    </SlideContainer>
  </Link>,
];

const Slider = () => {
  return (
    <Container>
      <AliceCarousel
        mouseTracking
        autoPlay
        infinite
        lazyLoading
        swipeExtraPadding="0"
        disableButtonsControls
        autoPlayInterval="4000"
        items={items}
        controlsStrategy="alternate"
      />
    </Container>
  );
};

export default Slider;
