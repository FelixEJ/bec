import React from "react";
import styled from "styled-components";
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
  background-color: rgba(200, 200, 200, 0.7);
  margin-bottom: 5vh;
  margin-top: 2vh;
`;

const Background = styled.div`
  background: rgba(255, 255, 255, 0.6);
  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.img`
  width: 30vw;
  padding: 1vw;
  opacity: 1;
`;

const HorizButtonBar = () => {
  return (
    <Container>
      {/* <Background> */}
        <Icon src={Join} alt="Join us Icon" />
        <Icon src={Donate} alt="Donate Icon" />
        <Icon src={Membership} alt="Membership Icon" />
      {/* </Background> */}
    </Container>
  );
};

export default HorizButtonBar;
