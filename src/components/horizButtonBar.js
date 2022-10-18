import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  background-color: rgba(200, 200, 200, 0);
  margin: auto;
  margin-bottom: 5vh;
  margin-top: 2vh;

  z-index: 10;
`;

const Icon = styled.img`
  width: 45vw;
  padding: 1vw;
  opacity: 1;
  margin: auto;

  @media only screen and ${breakpoints.device.md} {
    max-width: 200px;
  }
`;

const HorizButtonBar = () => {
  return (
    <Container>
      {/* <Icon src={Join} alt="Join us Icon" /> */}
      <Link to="/support" target="_blank" rel="noopener noreferrer">
        <Icon src={Donate} alt="Donate Icon" />
      </Link>
      {/* <Icon src={Membership} alt="Membership Icon" /> */}
    </Container>
  );
};

export default HorizButtonBar;
