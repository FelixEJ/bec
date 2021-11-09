import React from "react";
import styled from "styled-components";
import Join from "../images/join-us_0.png";
import Donate from "../images/donate_3.png";
import Membership from "../images/Become-a-member.png";

const Container = styled.div`
  display: block;
  max-width: 1000px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

const Background = styled.div`
  background: rgba(255, 255, 255, 0.6);
  &:hover {
      opacity: 1.0;
  }
`;

const Icon = styled.img`
  width: 30%;
  padding: 10px;
  opacity: 1.0;
`;

const HorizButtonBar = () => {
  return (
    <Container>
      <Background>
        <Icon src={Join} alt="Join us Icon" />
        <Icon src={Donate} alt="Donate Icon" />
        <Icon src={Membership} alt="Membership Icon" />
      </Background>
    </Container>
  );
};

export default HorizButtonBar;
