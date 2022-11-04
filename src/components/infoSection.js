import React from "react";
import styled from "styled-components";

const InfoSectionGroupContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: stretch;
  }
  @media only screen and (min-width: 1600px) {
  }
`;
export const InfoSectionGroup = ({ children }) => {
  return <InfoSectionGroupContainer>{children}</InfoSectionGroupContainer>;
};

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  max-height: 100vh;
  width: 100vw;
  background: rgb(255, 255, 255, 0.6);
  padding: 10px 10px;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    flex-flow: row nowrap;
    justify-content: space-evenly;
  }
  @media only screen and (min-width: 1024px) {
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 30vw;
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Image = styled.img`
  width: 80vw;

  background: rgb(200, 200, 0, 0.1);
  @media only screen and (min-width: 480px) {
    width: 45vw;
  }
  @media only screen and (min-width: 768px) {
    width: 50vw;
  }
  @media only screen and (min-width: 1024px) {
    width: 30vw;
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: centre;
  overflow: auto;
  max-height: 60%;
  min-height: 50px;
`;

const Title = styled.h2`
  display: block;
  margin: 0 auto;
`;

const Text = styled.p`
  width: 80vw;
  text-align: center;
  max-height: 60%;
  min-height: 50px;
  overflow: auto;

  background: rgb(100, 0, 100, 0.1);
  background-image: radial-gradient(
    circle,
    white,
    rgb(255, 255, 255, 0.6),
    rgb(255, 255, 255, 0.3)
  );
  border-radius: 20px;
  padding: 15px;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    width: 45vw;
    height: 30vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 30vw;
  }
  @media only screen and (min-width: 1600px) {
    max-height: 20vh;
  }
`;

const InfoSection = ({ pic, title, text }) => {
  return (
    <Container>
      <Image src={pic} />
      <TextBox>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextBox>
    </Container>
  );
};

export default InfoSection;
