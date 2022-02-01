import React from "react";
import styled from "styled-components";
import breakpoints from "../components/breakpoints";
import { Parallax } from "react-parallax";
import "../App.css";

import NavBar from "../components/navbar";
import HorizButtonBar from "../components/horizButtonBar";
import Footer from "../components/footer";

import BgImage01 from "../images/one.jpg";

const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;

  max-width: 1200px;
`;

const TopBackgroundImage = styled.div`
  background-color: none;
  margin: 1% 0% 1% 0%;
  column-count: 1;
  column-gap: 1%;
  margin-top: 5vh;

  @media only screen and ${breakpoints.device.md} {
  }
  @media only screen and ${breakpoints.device.lg} {
  }
`;

const Text = styled.div`
  background-color: rgba(200, 200, 200, 0.7);
  padding: 2vh;
  margin: 2vh;
`;

const Subtitle = styled.div`
  font-size: 1.2em;
  text-transform: uppercase;
`;

const Blueberry = () => {
  return (
    <Container>
      <NavBar />
      <Parallax bgImage={BgImage01} strength={-200}>
        <TopBackgroundImage>
          <Text>
            <h1>The Blueberry Campaign</h1>
            <p>
              The Bellingen Environment Centre started working on the Blueberry
              Campaign in 2015 when a local Valery resident notified them of
              their environmental concerns with a 150 acre blueberry farm on the
              edge of Pine Creek. The resident had exhausted every avenue to try
              and protect their local environment but still nothing serious has
              been done. Since the campaign began the blueberry farm has now
              expanded to over 400acres.
            </p>
            <p>
              <i>
                “Within weeks the forest was all cleared, the rows were ploughed
                almost to the edge of the Pine Creek, the Core Koala Habitat was
                gone. There were no siltation barriers in place. In March the
                rains came and once again the erosive destruction and pollution
                of Pine Creek continued on a massive scale.”
              </i>
            </p>
            <Subtitle>Residents experience 2017</Subtitle>
            <p>
              This isn’t just a blueberry problem it’s an industrial farming
              problem it’s not a Coffs Coast problem it’s a world problem. Soil
              degradation, land clearing, water shortage and pollution is
              happening worldwide. Due to over farming our fertile, crop
              production is dwindling. We need to start making industry changes
              to help preserve our major life source.
            </p>
            <p>
              You just have to watch an episode of Landline to see sustainable
              methods are being adopted throughout farming in Australia. These
              changes are creating remarkable results with eco systems returning
              and working with the farm to create better production, lower
              costs, fertile soil and a less demands on water. In this day and
              age we have to start adapting the positive science that is
              transforming the industry and stop using out of date farm methods
              that have a detrimental effect on our health and natural heritage.
            </p>
            <Subtitle>The Main Concerns</Subtitle>
            <p>
              There are no set of rules that are enforced to make sure farmers
              are doing right by residents and the environment. The EPA is
              understaffed and have only been to a handful of farms in the four
              years residents have been making complaints.
            </p>
            <p>
              A Code of conduct was released from the Australian Blueberry
              Growers Association this year. It didn’t seriously address the
              ongoing concerns residents were facing and with no body to enforce
              the code it really means nothing.
            </p>
            <p>
              Both leading parties plan to expand the industry by 20% each year
              for export to china. Like normal they are more concerned about the
              money than its people and We know there are farmers trying to do
              the right thing but every industry has rules to follow the reason
              we have rules is to cut out the cowboys that are giving workers a
              bad name.
            </p>
            <Subtitle>No Protection of our Waterways</Subtitle>
            <p>
              Water is such a precious commodity in Australia and around the
              world today. Blueberries are a very thirsty crop, to keep up the
              demand farmers have been illegally pumping out of our regions
              creeks and rivers. They have been building oversized dams which
              are catching the water before it gets to our natural water way.
            </p>
            <p>
              Farms run off is a great concern as its contaminated with chemical
              residue and silt erosion due to the direction of the rows they act
              like gutters which run strait into our creeks rivers and their
              dams, that eventually over flow into the water ways when the big
              rains do come. This is putting creeks, rivers and the oceans eco
              systems at risk.
            </p>
            <p>
              The southern cross university did a yearlong study of Bucca Bucca
              Creek over 2017 and found nitrate levels 50% to 800% over normal
              levels downstream from the blueberry farms. If nitrates build up
              it creates algae bloom taking the oxygen from the water and
              harming all the life in the water ways. The university had an
              information session for farmers about the report but sadly it was
              poorly attended.
            </p>
            <p>
              If farmers directed the rows across the contours of the land, used
              mulch instead of black plastic, introduced simple nitrate pits or
              reed beds, used silt catches and sufficient treed buffer zones
              they could reduce the amount of water needed and significantly
              reduce their impacts they have on our creeks and rivers.
            </p>
            <p>
              <a href="http://www.abc.net.au/news/2018-04-08/blueberry-farms-blamed-for-nitrogen-in-creek/9625214">
                ABC national news coverage of the Bucca Bucca creek report.
              </a>
            </p>
            <Subtitle>Over use of chemicals</Subtitle>
            <p>
              Overspray from the farms end up in our air which ends up in our
              drinking water, settling on our lawns, clothes, pools, gardens and
              finally into our precious water systems. If farms had sufficient
              treed buffer zones and sprayed responcibly it would stop the spray
              drift landing on resident’s homes.
            </p>
            <p>
              America has put blueberries on the most toxic list due to the high
              amounts of chemicals that are used in their production. With
              Australia still using chemicals that have been banned in the UK
              and America for years due to their cancer-causing properties who
              knows what our berries are getting sprayed with. Chemical build up
              in our bodies can lead to a number of health problems.
            </p>
            <p>
              We have so many alternatives to chemicals today it’s a shame more
              farmers aren’t adopting new proven methods that are less harmful
              to us and our environment.
            </p>
            <Subtitle>Illegal Logging</Subtitle>
            <p>
              In some cases there has been no regard for forest zoning. Koala
              corridors have been clear felled to make way for fields. The trees
              cut down are used for posts in the bird netting. Clearing the land
              adds to decline in wildlife, loss of habitat, erosion and silt
              build up. The fines farmers receive for forest destructions are
              insignificant compared to the money blueberry farms are making.
            </p>
            <p>
              <i>
                “Even though there was definite proof of pollution, erosion and
                illegal land clearing there still is no action with no results.
                These farmers are uncontrolled doing whatever they wish. There
                are no rules it seems, the wheels turn so extremely slow by the
                time there is any action by the relevant authorities it is too
                late and the damage is done both to the land and wildlife. The
                issue of pesticide spraying is also now a very urgent issue.”
              </i>
            </p>
            <Subtitle>What the BEC has been doing</Subtitle>
            <p>
              In 2017 the BEC held a series of meeting first to hear community
              concerns. To follow we held an information session to explain up
              to date alternative methods to replace out of date farming around
              Coffs Harbour and finally a public awareness meeting to let other
              people in our community know what is really happening.
            </p>
            <p>
              The executive director of the Blueberry Growers Association was
              invited to give residents an over view of the Code of Conduct they
              created and run a Q and A session on the problems in the area.
              Unfortunately, Alex Smith cancelled due to personal reasons. When
              the BEC called to reschedule the meeting, he declined as he told
              us the consultation period was over and all residents have had
              their chance to voice their opinions at their meetings. This is
              total rubbish as no resident was invited to any meeting.
            </p>
            <p>
              We also lobbied the Bellingen, Nambucca and Coffs councils urging
              them to pass DA approval for all intensive horticulture and asked
              that the DPI guidelines be enforced for all Blueberry farmers.
            </p>
            <p>
              Bellingen council passed a gateway proposal regarding buffer zones
              and wildlife corridors this was accepted at reginal planning.
              Unfortunately, The State planning authority knocked it back due to
              Political decision. Sally Townley and Dominic King are not happy
              with this result and are now taking the matter to a private body
              the joint reginal planning panel along with the water report.
            </p>
            <p>
              We are continuing to gather evidence of misconduct and are
              compiling a report on the industry.
            </p>
            <Subtitle>How to help</Subtitle>
            <p>
              JOIN YOUR LOCAL facebook GROUP Citizens unite or Bellingen
              blueberry action group, join Bellingen Environment Centre,
              Clarence environment centre, Nambucca conservation center North
              Coast Environment conservation.{" "}
            </p>
            <p>
              Get your creeks and water tanks tested, hold a fundraiser, sign
              our petition, donate and educate your community.
            </p>
            <p>
              <a href="https://www.change.org/p/no-blueberry-farm-boambee">
                Sign this petition
              </a>
            </p>
            <p>We are calling upon concerned residents to regularly contact state and local government and the media to express their concerns have a standard letter and mailing list that you email once a month or once a week. Listed below are some useful contacts.</p>
            <p>The Hon Sussan Ley MP Electorate Office Telephone:<a id="phone" href="tel:+61260213264">(02) 6021 3264</a>; Fax:<a id="phone" href="tel:+61260216620">(02) 6021 6620</a> </p>
            <p>Email <a href="https://sussanley.com/">can be found here</a></p>
            <p>Pat Conaghan, National Party of Australia </p>
            <p>Contact <a href="https://patconaghan.com.au/contact/">can be found here</a></p>            
            <p>Melinda Pavey Member for Oxley Telephone:<a id="phone" href="tel:+61265626190">(02) 6562 6190</a></p>
            <p>Email <a href="oxley@parliment.nsw.gov.au">them here</a></p>
          </Text>
        </TopBackgroundImage>
      </Parallax>
      <Footer />
    </Container>
  );
};

export default Blueberry;
