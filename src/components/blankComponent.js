import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;

  margin-left: auto;
  margin-right: auto;
`;

const Blank = () => {
  return (
    <Container>
        <h1>Blank Template</h1>
    </Container>
  );
};

export default Blank;