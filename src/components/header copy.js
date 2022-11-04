import React from "react";
import styled from "styled-components";
import HeaderImage from "../images/header.png";

const Image = styled.img`
  width: 100%;
  max-width: 960px;
  display: block;

  margin-left: auto;
  margin-right: auto;
  background-color: none;
`;

const Container = styled.div`
  display: block;

  margin-left: auto;
  margin-right: auto;
`;

const Header = () => {
  return (
    <Container>
      <a href="/">
        <Image
          src={HeaderImage}
          alt="temp header image"
        />
      </a>
    </Container>
  );
};

export default Header;