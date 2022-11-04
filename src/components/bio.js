import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  margin: 15px auto;
`;

const Title = styled.h1`
  width: 80vw;
  text-align: center;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Text = styled.h4`
  width: 80vw;
  text-align: center;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Bio = () => {
  return (
    <Container>
        <Title>Business Bio</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
    </Container>
  );
};

export default Bio;