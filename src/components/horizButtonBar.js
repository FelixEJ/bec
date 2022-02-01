import React from "react";
import styled from "styled-components";
import breakpoints from "./breakpoints";
import Join from "../images/join-us_0.png";
import Donate from "../images/donate_3.png";
import Membership from "../images/Become-a-member.png";

const Container = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 95vw;
  background-color: rgba(200, 200, 200, 0.7);
  margin: auto;
  margin-bottom: 5vh;
  margin-top: 2vh;
  
  @media only screen and ${breakpoints.device.lg} {
    position: relative;
    
    width: 20vw;
    flex-flow: column wrap;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 5vw;
    margin-bottom: 10vw;
    background-color: rgba(200, 200, 200, 0.0);
  }
`;

const Icon = styled.img`
  width: 30vw;
  padding: 1vw;
  opacity: 1;
  margin: auto;

  @media only screen and ${breakpoints.device.md} {
    max-width: 200px;
  }
  @media only screen and ${breakpoints.device.lg} {
    width: 15vw;
    background-color: rgba(200, 200, 200, 0.7);
  }
`;

const HorizButtonBar = () => {
  return (
    <Container>
        <Icon src={Join} alt="Join us Icon" />
        <Icon src={Donate} alt="Donate Icon" />
        <Icon src={Membership} alt="Membership Icon" />
    </Container>
  );
};

export default HorizButtonBar;
