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
          <Subtitle>Contact our Local Aboriginal Land Councils</Subtitle>
          <List>
            <ListItem>
              <Link
                href="https://alc.org.au/land_council/bowraville/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Bowraville Land Council
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://alc.org.au/land_council/nambucca-heads/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Nambucca Heads
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://unkya.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Macksville
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://alc.org.au/land_council/coffs-harbour/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Coffs Harbour
              </Link>
            </ListItem>            
          </List>
          <Subtitle>The Bellingen Environment Centre is proud to work alongside our Local and Regional Protectors</Subtitle>
          <List>
            <ListItem>
              <Link
                href="https://www.nvca.org.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Nambucca Valley Conservation Assoc
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.facebook.com/DorrigoEnvironment"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Dorrigo Environment Watch
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://cec.org.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Clarence Valley Environment Centre
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://friendsofpinecreek.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Friends of Pine Creek FoPC
              </Link>
            </ListItem>
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
                href="https://www.kalangrfa.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Kalang River and Forest Alliance
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.facebook.com/forestecologyalliance"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Forest Ecology Alliance
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.facebook.com/groups/445142404085110"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Friends of Karanghi
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.facebook.com/groups/482584800380402/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Friends of Bagawa
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="http://friendsofkalangheadwaters.com.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Friends of Kalang Headwaters
              </Link>
            </ListItem>
          </List>
          <Subtitle>We are working with the following Peak Bodies to Protect our Land and Waterways</Subtitle>
          <List>
            <ListItem>
              <Link
                href="https://www.nefa.org.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; North East Forest Alliance NEFA
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.ncec.org.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; North Coast Environment Council NCEC
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.nature.org.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Nature Conservation Council of NSW NCC
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.bellingen.nsw.gov.au/Your-Council"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Bellingen Shire Council BSC
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://npansw.org.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; National Parks Association NPA
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://forestsandclimate.org.au/"
                target="_blank"
                rel="noreferrer noopener"
              >
                &#8226; Australian Forests and Climate Alliance AFCA
              </Link>
            </ListItem>            
          </List>
        </Text>
      </Container>
    </div>
  );
};

export default Statement;
