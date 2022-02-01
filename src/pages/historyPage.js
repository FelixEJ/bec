import React from "react";
import styled from "styled-components";
import breakpoints from "../components/breakpoints";
import { Parallax } from "react-parallax";
import "../App.css";

import NavBar from "../components/navbar";
import HorizButtonBar from "../components/horizButtonBar";
import Footer from "../components/footer";

import BgImage01 from "../images/one.jpg";
import BgImage02 from "../images/zero.jpg";

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

const BottomBackgroundImage = styled.div`
  background-color: none;
  margin: 1% 0% 1% 0%;
  column-count: 1;
  column-gap: 1%;
`;

const Text = styled.div`
  background-color: rgba(200, 200, 200, 0.7);
  padding-left: 2vh;
  padding-right: 2vh;
  margin-left: 2vh;
  margin-right: 2vh;
`;

const History = () => {
  return (
    <Container>
      <NavBar />
      <Parallax bgImage={BgImage01} strength={-200}>
        <TopBackgroundImage>
          <Text>
            <h1>Bellingen Environment Centre History</h1>
            <h2>by Cath Eaglesham</h2>
            <p>
              Firstly, I would like to acknowledge the Gumbaynggirr Nation who
              have never ceded sovereignty over their Land and Waters. And pay
              my respects to the Elders, past present and emerging.
            </p>
            <p>
              Bellingen Shire has a long history of environmental activism going
              back to the 1970ss when the battle for the Black Scrub and the
              burgeoning wood chip industry was front and centre with concerned
              local citizens. The forerunner to the Bellingen Environment Centre
              was the Bellingen and Plateau Conservation Society.Bellingen
              Environtment Centre was birthed in 1988 and became incorporated in
              June 1990. The Bellingen and Plateau Conservation Society had a
              meeting to wind up and merge with the Bellingen Environment Centre
              in late 1990.
            </p>
            <p>
              The early Bellingen Shire environmentalists, attributed to the New
              England Wilderness Park which was listed in1986 as World Heritage.
              The late 80s were turbulent years as councils were closing down
              neighbourhood centres. The struggle to save Bellingen’s
              Neighbourhood Centre was in full swing. Local solicitor Paul
              Tipper, owned a house in Hyde Street just up from the Yellow Shed,
              which he let the neighbour hood centre utilise. This is where the
              BEC initially met. I attended my first BEC meeting there. The late
              eighties was a time when government bodies were not funding
              environment centres in fact they were also suing Environment
              groups.{" "}
            </p>
            <p>
              The 1991 AGM, in April was started in the house near the Yellow
              Shed, but had to moved on the night to the RSL when the gravel
              extractors and loggers tried to take over the AGM and the
              Bellingen Environment Centre. Martin Hogan was the inaugural
              President of the BEC and I was voted in as Vice President shortly
              after joining.
            </p>
            <p>
              So the then President of BEC, Martin Hogan, had the idea to set up
              The Friends of Bellingen Environment Centre, with the intent of
              purchasing a building, to house the environment centre in
              perpetuity. Shares were purchased both locally and afar by
              supporters of the Bellingen Environment Centre. The intention was
              to give the BEC a permanent home, without ownership of the
              building so that in the possibility of the BEC being sued, we
              would not have an asset that could be taken away from us.
            </p>
            <p>
              In 1990, Friends of BEC was formed and shares were sold to raise
              much needed funds for the purchase of a building. $30,000 was
              raised and a further donation of $50,000 donated by three
              investors, enabled the purchase of the funeral parlour then owned
              by Geoff Hammond at No. 1 Church Street Lane. The contracts were
              exchanged on October 2nd and were settled later that month. The
              formation of a new company, Sustainable Earth Projects was formed.
              One important condition of the major investors was that the
              $50,0000 $1-00 shares be resold to members of the community within
              5 years. It was SEPs objective that these shares be sold as the
              strength lies in community ownership and working together. The BEC
              is a major shareholder in SEP. Three members of BEC are currently
              directors of SEP.
            </p>
            <p>
              During this time, the BEC office operated temporarily from the
              Blue Phoenix Bookshop opposite the newly purchased funeral
              parlour. The office was a very small storeroom at the back of the
              Book Shop.The renovation works began amidst the Old Growth Forest
              campaigns of Chaelundi , Wildcattle Creek and Killerkrankie. The
              BEC moved into the newly renovated building occupying the middle
              shop. We also had use of the loft upstairs. The BEC shop front was
              a vibrant hive of activity. There was a working office within the
              shop with sold environment friendly merchandise, campaign media
              and housed a local exchange trading scheme called LETS. The shop
              was a spirited meeting place with a steady flow of activists and
              campaigners eager to assist in every which way. The shop was
              totally run by a dedicated team of rostered volunteer campaigners
              and shop keepers.In the formative years of the BEC an annual
              market of native plants was established to encourage the planting
              of native species. The Bellingen Plant Fair has grown remarkably
              over more than 3 decades. It now hosts bi annual Autumn and Spring
              Plant Fairs. Covid permitting. The Bellingen Plant Fair is the
              major fundraiser for the ongoing work of the BEC.Over the last
              three decades, the BEC’s dedicated volunteers have been involved
              in numerous campaigns working both independently and in
              collaboration with other environmental organisations. Our
              volunteers have done and continue to highlight the need to protect
              our precious biodiverse forests, and river catchments from
              destructive habitat modification. BEC lost its shop front in the
              mid 1990s and has been since operating from the loft at No.1
              Church street Lane.
            </p>
            <p>Successful environmental campaigns of the past include,</p>
            <ul>
              <li>Stopping gravel extraction pits at Glennifer </li>
              <li>
                Inclusion in the National Park system of the New England
                Wilderness World Heritage Gondwana Rainforest and the Upper
                Bellingen Catchment, the Bellingen River National Park and the
                Bongil Bongil NP. McGraths Hump Ngali ‘Old Man Dreaming’added
                Dorrigo NP in cooperation with Uncle Larry Kelly. Baalingin
                Nature Reserve{" "}
              </li>
              <li>
                Forest Action Group (FAG) activists at the BEC supported North
                East Forest Alliance throughout the 1990s Old Growth Forest
                Campaigns at Chaelundi, Killakrankie, Wild Cattle Creek, Patroi
                Plateau, Mistake, Carri and Mummel Gulf State Forests{" "}
              </li>
              <li>
                Proposed water storage dam for supplying Coffs Harbour on
                Northbank road (SLARKS){" "}
              </li>
              <li>
                Protection of the Bellinger River Emydura and Elseyer turtles.
              </li>
              <li>
                Protection of the Bellinger River from intensive dairying and
                feedlots.{" "}
              </li>
              <li>
                BEC was represented on the Estuary Management Committee, the
                Catchment Management Advisory Committee and the Solitary Island
                Marine Advisory Committee{" "}
              </li>
              <li>Currently we have members in Landcare and Waterwatch</li>
            </ul>
            <p>Bellingen Environment Centre has highlighted;</p>
            <ul>
              <li>
                Calling attention to the need to protect our rivers and creeks
                from the heavy chemical loads from intensive agriculture.
                Resulting in the Plant Agriculture (IPA) in Coffs Harbour Koalas
                contributing to the Koala Populations of the mid north
                coast(Dave Scotts 2012) which identified the importance of the
                Koala colony which runs between Red Rock and Nambucca Heads with
                the nursery of koalas at Bongil Bongil and the headwaters of
                Kalang river now identified as vital corridor crossing between
                Bellingen and Nambucca Heads. A five year contribution of input,
                putting together Bellingen Shire Koala Management plan. The
                original Great Koala National Park concept and authorship, which
                is now being promoted by the NSW National Parks Association and
                gaining traction with the public.
              </li>
              <li>Placing the spotlight on the insidious biomass industry. </li>
              <li>
                BEC has sponsored and funded other environment groups and
                campaigns within our region.
              </li>
              <li>
                BEC was the recipient of the Nature Conservation Council NSW,
                Marie Byles Award for strong commitment and passion for the
                conservation of the NSW environment. Life member Lief Lemsky
                received the Allen Strom Award for his constant and invaluable
                contribution to the environment displaying qualities of
                integrity commitment and reliability over many years.{" "}
              </li>
            </ul>
            <p>
              BEC volunteers are committed to working with the Gumbaynggirr
              Nation and to the protection of Native Forests. Current campaigns
              are in Newry and Oaks State Forests. We support the Friends of
              Kalang Head Waters Conservation Proposal; A Nature reserve for the
              Upper Kalang , Middle Bellingen and Nambucca Rivers. BEC continues
              networking with all levels of government and other like minded
              groups locally, and in the North Coast region and at a state and
              national level, to save our Forests, waterways and threatened
              Fauna and flora. BEC has zero tolerance to the logging of prime
              koala habitat. We welcome new members to help preserve our
              precious environment.
            </p>
          </Text>
        </TopBackgroundImage>
      </Parallax>
      <Parallax bgImage={BgImage02} strength={200}>
        <BottomBackgroundImage>
          <Footer />
        </BottomBackgroundImage>
      </Parallax>
    </Container>
  );
};

export default History;
