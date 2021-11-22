import React from "react";
import styled from "styled-components";
import FooterImage from "../images/Acknowledge-Background-Image.png";

const Text = styled.div`
  width: 95vw;
  margin: auto;
  text-align: left;
`;

const Subtitle = styled.h3`
  text-align: center;
  color: #354721;
`;

const Link = styled.a`
  color: #354721;
  text-decoration: none;
`;

const Container = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  align-content: space-around;
  flex-direction: column;
`;

const Statement = () => {
  return (
    <Container>
      <Text>
        <Subtitle>AIMS</Subtitle>
        <p>The Bellingen Environment Centre committee works towards:</p>
        <ul>
          <li>Promotion of the cause of environmental issues</li>
          <li>
            Protection of the natural environment and biodiversity of the
            Bellinger Valley.
          </li>
          <li>
            Fostering proactive responses to climate change with a commitment to
            non-violent action principles.
          </li>
        </ul>
      </Text>
      <Text>
        <Subtitle>FUNDING</Subtitle>
        <p>
          The BEC is funded by membership fees, member contributions, and our
          twice yearly fund-raiser, the Plant Fair. We are a major share-holder
          in the Sustainable Earth Project, by donation of shares by our
          members, and as a share-holder we are also responsible for the
          commercial loans towards the Solar Installation on our building.
        </p>
      </Text>
      <Text>
        <Subtitle>COMMUNITY GROUPS</Subtitle>
        <ul>
          <li>
            <Link href="http://friendsofkalangheadwaters.com.au/">
              Friends of Kalang Headwaters
            </Link>
          </li>
          <li>
            <Link href="https://www.nefa.org.au/">
              North East Forest Alliance
            </Link>
          </li>
          <li>
            <Link href="https://www.gumbaynggirrconservationgroup.org/">
              Gumbaynggirr Conservation Group
            </Link>
          </li>
          <li>
            <Link href="https://www.koalapark.org.au/">
              The Great Koala Park
            </Link>
          </li>
          <li>
            <Link href="https://www.bellingerlandcare.org.au/">
              Bellingen Landcare
            </Link>
          </li>
        </ul>
      </Text>
    </Container>
  );
};

export default Statement;
