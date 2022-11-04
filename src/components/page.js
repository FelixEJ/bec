import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;

  margin-left: auto;
  margin-right: auto;
`;

const Page = () => {
  return (
    <Container>
      <h1>page</h1>
    </Container>
  );
};

export default Page;