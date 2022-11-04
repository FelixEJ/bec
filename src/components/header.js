import React from "react";
import styled from "styled-components";

import HeaderImage from "../images/header.png";
import Logo from "../images/logo.png";
import Title from "../images/BEC_dark.png";

const Container = styled.div`
  display: block;

  margin-left: auto;
  margin-right: auto;
`;

const HeaderBG = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  align-content: center;

  background-image: url(${HeaderImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TitleCont = styled.div`
  height: 100px;
`;

const LogoCont = styled.div`
  height: 100px;
`;

const HeaderImg = styled.img`
  height: 100px;
  padding: 5px;
`;

const Header = () => {
  return (
    <Container>
      <a href="/">
        <HeaderBG >
          <LogoCont>
            <HeaderImg src={Logo} alt="Bellingen Environment Centre logo" />
          </LogoCont>
          <TitleCont>
            <HeaderImg src={Title} alt="BEC since 1988" />
          </TitleCont>
        </HeaderBG>
      </a>
    </Container>
  );
};

export default Header;
