import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: space-around;
  flex-direction: column;
`;

const Text = styled.div`
  width: 90vw;
  max-width: 500px;
  text-align: center;
  margin: 15px;
  padding: 15px;
  background: rgb(255, 255, 255, 0.9);
  border-radius: 5px;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    max-width: 300px;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 400px;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 500px;
  }
`;

const Subtitle = styled.h3`
  text-align: center;
  color: #284124;
`;

const Link = styled.a`
  color: #284124;
  text-decoration: underline;
  padding: 0 5px;
`;

const List = styled.ul`
  padding: 0 15px;
  list-style-type: none;
`;
const ListItem = styled.li`
  padding-top: 5px;
  list-style-type: none;
`;

const Statement = () => {
  return (
    <div>
      <Container>
        <Text>
          <Subtitle>AIMS</Subtitle>
          <p>The Bellingen Environment Centre committee works towards:</p>
          <List>
            <ListItem>&#8226; Promotion of the cause of environmental issues.</ListItem>
            <ListItem>
            &#8226; Protection of the natural environment and biodiversity of the
              Bellinger Valley.
            </ListItem>
            <ListItem>
            &#8226; Fostering proactive responses to climate change with a commitment
              to non-violent action principles.
            </ListItem>
          </List>
        </Text>
        <Text>
          <Subtitle>FUNDING</Subtitle>
          <p>
            The BEC is funded by membership fees, member contributions, and our
            twice yearly fund-raiser, the Plant Fair. We are a major
            share-holder in the Sustainable Earth Project, by donation of shares
            by our members, and as a share-holder we are also responsible for
            the commercial loans towards the Solar Installation on our building.
          </p>
        </Text>
      </Container>
      <Container>
        <Text>
          <Subtitle>COMMUNITY GROUPS</Subtitle>
          <List>
            <ListItem>
              <Link
                href="http://friendsofkalangheadwaters.com.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Friends of Kalang Headwaters
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.nefa.org.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; North East Forest Alliance
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.gumbaynggirrconservationgroup.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Gumbaynggirr Conservation Group
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.koalapark.org.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; The Great Koala Park
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.bellingerlandcare.org.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Bellingen Landcare
              </Link>
            </ListItem>
          </List>
        </Text>
      </Container>
    </div>
  );
};

export default Statement;
