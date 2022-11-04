import React from "react";
import styled from "styled-components";

import pic from "../images/1.jpg";

function importAll(images) {
  return images.keys().map(images);
}
const gallery = importAll(
  require.context("../images/samples/", false, /\.jpg$/)
);

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

const GalleryContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 999px;
`;

const Image = styled.img`
  max-width: 49%;
  padding: 5px;
  @media only screen and (min-width: 480px) {
    max-width: 24%;
  }
  @media only screen and (min-width: 768px) {
    max-width: 24%;
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Gallery = () => {
  var pics = 0;
  return (
    <Container>
      <GalleryContainer>
        {gallery.map((image, index) => {
          // while (pics < 16) {
          //   pics++;
          // }
          return <Image src={image.default} key={index} />;          
        })}        
      </GalleryContainer>
    </Container>
  );
};

export default Gallery;
