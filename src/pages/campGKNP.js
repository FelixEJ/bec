import React from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";
import ProgressiveImage from "../components/progressiveImage";
import "../App.css";

import Footer from "../components/footer";

import BgImage01 from "../images/BGone.jpg";
import GKNPMap from "../images/GNKP_map_ii.jpg";
import GKNPMapMini from "../images/GNKP_map_ii_mini.jpg";

const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ParallaxCont = styled.div`
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

const Subtitle = styled.h3`
  font-size: 1.2em;
  text-transform: uppercase;
  text-align: center;
`;

const Image = styled.div`
  max-width: 100%;
  display: block;
  margin: 15px auto;
`;

const TextBox = styled.div`
  display: block;
  margin: 15px auto;
  padding: 15px;
  background: rgb(255, 255, 255, 0.9);
  border-radius: 5px;
  max-width: 95vw;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    max-width: 1000px;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 1200px;
  }
`;

const KoalaNationalPark = () => {
  return (
    <Container>
      <Parallax bgImage={BgImage01} strength={-200}>
        <ParallaxCont>
          <TextBox>
            <Title>The Great Koala National Park</Title>
            <p>
              The Great Koala National Park (GKNP) was first floated in
              mid-2014. Picked up by then NSW Opposition Environment
              Spokesperson. The proposed GKNP on paper covers an area from just
              north of Kempsey in the south to Woolgoolga in the north. It
              roughly runs west from the Pacific Highway to as far as a line
              aligned with the beginning of the Dorrigo Plateau in the east. At
              the north of the park it runs west to around Clouds Creek. Adding
              175,000-hectares of State forests to existing protected areas to
              form a 315,000-hectare reserve. As such it will run through all
              three Local Government Areas of the Coffs Coast. It has arisen as
              an idea that grew out of numerous local campaigns aimed at
              protecting the region’s Koala habitat over the past 26 years.
            </p>
            <Subtitle>The history of the GKNP</Subtitle>
            <p>
              The first serious local campaign to save koalas was a community
              protest against logging high quality koala habitat in compartments{" "}
              <a href="http://www.forestrycorporation.com.au/__data/assets/pdf_file/0011/493553/pine-creek-sf-cpt-26-27-harvest-plan-maps.pdf">
                (Cpts) 26 and 27 in Pine Creek State Forest
              </a>{" "}
              in 1992. Logging was stopped. and there was much ‘gnashing of
              teeth’ and $100,000’s spent by the then Forestry Commission on
              various studies and ‘koala plans’ until After hundred of thousands
              of dollars was spent by the Forestry Commission on Koala studies
              and plans, the Carr Labor government extended Bongil Bongil
              National Park in July 2003 by adding 3,156-hectares of the former
              Pine Creek State Forest.
            </p>
            <p>
              Interestingly Cpts 26 and 27 were left out of the park and remain
              threatened by logging today. The reason they were left out of the
              extended Bongil Bongil National Park was that environmentalists
              were forced by the Government in 2002, to make a choice between
              protecting them or some old growth west of Woolgoolga where the
              North East Forest Alliance (NEFA) had protested against logging in
              2000.
            </p>
            <p>
              In 2010, North Coast environmentalists started to become seriously
              concerned about the state of koalas on the North Coast. There were
              increasing reports of widespread declines from landholders,
              ecologists and wildlife carers. In 2011, The Senate held an
              inquiry into koalas and it was reported that koalas in eastern
              Australia had declined by 50% over the last twenty years. In 2012,
              the then Rudd/Gillard Federal Labor Government listed koalas as
              vulnerable in NSW and QLD.
            </p>
            <p>
              NEFA states that it was about the time Forestry Corporation of NSW
              (FCNSW) started to increase logging intensity of coastal forests
              from 50% tree removal to up to 90% tree removal — a practice
              environmentalists argue is virtual ‘clearfelling’. The increase in
              logging intensity was viewed as illegal by many in the local
              environmental movement, and they argue that this was a view held
              by the NSW Environment Protection Agency (EPA), but it was
              believed that they would not act against FCNSW. The NSW Government
              has now legalised this intensive logging prescription.
            </p>
            <p>
              In 2012, four local environment groups — Bellingen Environment
              Centre, Clarence Environment Centre, Nambucca Valley Conservation
              Association, and North Coast Environment Council — combined with
              the NSW National Parks Association to raise $3,000 to engage
              experienced ecologist David Scotts to undertake mapping and
              reporting on Koala populations on the Mid North Coast between the
              Macleay and the Richmond Rivers.
            </p>
            <p>
              <i>
                “We want it to be a place people can go and interact with
                nature. To walk, bike, stay overnight or longer. It is not
                proposed to lock up so many hectares and just throw away the
                key. We want it to be a great national and globally significant
                attraction within our region”
              </i>
              , quoting a local environmental spokesperson.
            </p>
            <p>
              Scott’s original work identified and described three Koala
              meta-populations in the region, including seven regional
              populations and 25 sub- populations. He reported on the population
              size, status, density, threats, confidence limits and land tenure
              for each population class. The three meta-populations described;
              the Clarence-Richmond, the Coffs Harbour-Guy Fawkes and The
              Bellingen-Nambucca-Macleay, were each identified as being of
              national conservation significance.
            </p>
            <p>
              Environmentalists reviewed Scott’s work and developed a
              conservation proposal covering native forests on public land
              within the Coffs Harbour-Guy Fawkes and The
              Bellingen-Nambucca-Macleay meta-populations.
            </p>
            <p>
              The proposal was included as one of 13 conservation reserve
              proposals in the publication:{" "}
              <i>
                “Our-environment-our-future-policies-for-the-2015-election-and-beyond”
              </i>
              , produced by leading environment advocacy groups in NSW and
              originally published in September 2014, in the lead up to the
              March 2015 NSW State election. The proposal was to:{" "}
              <i>
                “establish a reserve system for koalas including the Coffs
                Harbour –Guy Fawkes and the Bellingen- Nambucca- Macleay koala
                meta-populations”
              </i>
              .
            </p>
            <Subtitle>The GKNP attracts political support</Subtitle>
            <p>
              The NSW Opposition spokesman for the environment at the time, Luke
              Foley, reviewed the policies document and, as mentioned above, was
              attracted to the koala reserve proposal.
            </p>
            <p>
              A report entitled: “A blueprint for a comprehensive reserve system
              for koalas on the North Coast of NSW”, was presented to Mr Foley
              in December 2014, who subsequently visited Coffs Harbour in
              January 2015 when he formally announced State Labor’s support for
              the GKNP. Labor’s policy included $150m for the establishment of
              the GKNP and other conservation initiatives. This policy has since
              been supported by the NSW Greens Party.
            </p>
            <p>
              Groups such as National Parks Association have continued to
              promote the GKNP. The original assessment work by David Scotts
              (2013) has now been extended north to the Queensland border and
              south to the Hunter River. The Office of Environment and Heritage
              has incorporated the ‘Koala work’ by Coffs Coast environment
              groups into a ‘Save Our Species’ project on Koalas, to produce
              areas of koala significance at regional and local scales.
            </p>
            <p>
              Several councils on the Coffs Coast have been approached to
              support the GKNP concept. Nambucca Council has asked for a
              cost/benefit analysis, and Bellingen Shire has given in principle
              supplort for the GKNP proposal. Coffs Harbour and Bellingen Shire
              councils have contributed $25,000 each for a feasibility study.
            </p>
            <Subtitle>Support for the GKNP has continued to grow</Subtitle>
            <p>
              Valuable political support has been given by Labor’s candidate for
              the federal seat of Cowper Andrew Woodward, federal Labor Senator
              Jenny McAllister, and Nambucca Shire Labor Cr Susan Jenvey. The
              NSW State Labor opposition has committed to creating a Great Koala
              National Park on the north coast. In March 2019, the NSW Greens
              announced support for the GKNP. Valuable political support has
              been given by NSW Greens MLC Cate Faehrmann, federal Greens
              Senator Janet Rice, ex-Greens leader Christine Milne, Bellingen
              Shire councillors Dominic King, Jennie Fenton and Toni
              Wright-Turner, and indepetent Coffs Harbour Cr Sally Townley,
              ex-NSW Greens MLC Jeremy Buckingham, and ex-NSW Greens MLC Dawn
              Walker.
            </p>
            <p>
              Supporting organisations include: NCEC, BEC, KRFA, NVCA, NEFA,
              NPA.
            </p>
            <Subtitle>What is the Great Koala National Park</Subtitle>
            <p>
              A local GKNP spokesperson said we want the park to{" "}
              <i>
                “be a place people can go and interact with nature … to walk or
                bike and stay overnight or longer. It is not proposed to lock up
                so many hectares and just throw away the key. We want it to be a
                great national and globally significant attraction within our
                region”
              </i>
              .
            </p>
            <p>
              It is proposed that it stretch from near Kempsey in the south to
              approximately equal to Woolgoolga in the north and that it be a
              park that actively encourages day and multi-day walking and biking
              trips with overnight stays within its boundaries. It is also
              proposed that it link via cross promotions with existing tourist
              attractions such as the Marine National Park and the wonderful new
              ‘Tree Tops Walk’ at Sealy Point. The Park has the potential to be
              a national and international destination that would give the
              region’s tourist and support industries a real boost and making
              the region a year round destination.
            </p>
            <Image>
              <ProgressiveImage
                src={GKNPMap}
                placeholderSrc={GKNPMapMini}
                alt="Map of the proposed Great Koala National Park"
              />
            </Image>
            <Subtitle>The GKNP can boost the local economy</Subtitle>
            <p>
              A very rough estimate can be arrived at in relation to what the
              proposed park might conservatively be worth economically to our
              region. In 1995, the NSW National Parks and Wildlife Service
              released a report: “Economic Value of Recreational use: Gibraltar
              Range and Dorrigo National Parks”. It showed that the economic
              value of those Parks then to be approximately $90m a year. In fact
              an erratum in the report highlighted their original estimate was
              too conservative and that $90m was nearer the mark. In 2018
              dollars that equals $148,576,771.65. Let’s say $150m a year. Since
              that report was done major improvements have been made to those
              Parks and visitor numbers have increased as a result, so $150m is
              probably a conservative figure in 2018.
            </p>
            <p>
              The proposed GKNP is three to four times the size of the Gibraltar
              Range and Dorrigo National Parks. It is designed to draw tourists
              for longer stays and to spend greater amounts of time and money in
              our region. It has the potential to be regionally, nationally and
              internationally significant and as such is just the sort of thing
              that the Chamber of Commerce and local tourism associations need
              to try and induce airlines to make the Coffs Coast an
              international destination.
            </p>
            <p>
              It is not unrealistic, given the above sum of $150m for the
              Gibraltar Range and Dorrigo National Parks, to say that a ‘back of
              the envelope calculation’ is that the GKNP could conservatively be
              worth $300m a year to the region’s economy. The potential flow on
              benefits to tourism and other support industries across the State
              as a whole should not be underestimated either. So not only would
              crucial flora and fauna be saved but also they would be open to
              the public to be admired and interacted with in a sustainably
              managed way that would also potentially be a major socio-economic
              boost. Clearly a far more thorough cost/benefit analysis needs to
              be done than the figures presented above. Indeed such an analysis
              should be done. It should take into account what the GKNP would
              mean for all affected industries, including logging.
            </p>
            <p></p>
            <Subtitle>
              The GKNP fits with local government tourism strategies
            </Subtitle>
            <p>
              The GKNP is closely aligned to the aspirations of relevant
              governments. For example the current Coffs Coast Tourism Strategic
              Plan states:{" "}
              <i>
                “Tourism is one of the most important contributors to the growth
                and character of the Coffs Coast region comprising Coffs Harbour
                and Bellingen LGAs. The annual economic contribution of tourism
                to the region is valued at approximately $490 million. It is
                estimated that the Coffs Harbour LGA receives 1.6 million
                visitors annually and the Bellingen LGA receives 223,000. Most
                are domestic overnight visitors and daytrip visitors, with
                international visitors accounting for around 5%. Given the
                significance of tourism to the Coffs Coast economy and the
                competitiveness of tourism in regional Australia, it is
                important that tourism is not only maintained and strengthened
                as an economic driver, but also planned and managed in a
                sustainable way to enhance and conserve the natural environment,
                protect the wellbeing of residents and attract visitors with
                shared values”
              </i>
              .
            </p>
            <p>
              The Plan then identifies strategies and associated actions for
              each key direction. Important strategies include: establishment of
              working groups as part of the DCC to assist with: industry
              development and engagement, accommodation development and
              refurbishment strategies, a Coffs Coast brand review process, and
              development of a new nature-based tourism strategy and
              commencement of a stakeholder engagement process to introduce a
              tourism and business levy, and importantly for us…. Supporting
              operators to develop new products that focus on distinctive
              experiences related to leisure, nature-based, regional food, and
              arts and culture.
            </p>
            <p>
              For Bellingen Shire, tourism is identified as a top priority as
              part of the BSC Economic Development and Tourism Plan 2015-2020.
              The Manager, Economic and Business Development works with local
              stakeholder organisations to foster sustainable tourism and
              economic development. A Memorandum of Understanding (MOU) was
              established between BSC and CHCC in 2008, with BSC currently
              contributing $30,000 annually to CCM for marketing activities.
            </p>
            <p>
              <b>
                <i>
                  "Further development of ecotourism and a National Koala Park
                  is a must, thanks to the incredible natural assets we have
                  stretching from the coast up to Dorrigo."
                </i>
              </b>
            </p>
            <p> - Dominic King, Mayor of Bellingen Shire</p>
            <p>
              At the State level, the Tourism Forecasting Council predicts that
              Mainland China will continue its current growth trend for at least
              the next decade. National arrival forecasts for 2020/21 have been
              revised upwards to 1.039 million and visitor nights to more than
              48.9 million. Total economic value to Australia from China is
              forecast to exceed $6.8 billion. A key outcome for NSW in the
              years leading up to 2020 will be to maintain market leadership by
              protecting and growing its share of visitors and visitor nights,
              and continuing to attract higher levels of expenditure. If NSW is
              successful in achieving this objective, it is set to almost double
              the value of Chinese visitor expenditure within the state by
              2020/21. The Chinese tourist seeks authentic indigenous and nature
              based experiences. The most compelling proposition for Australian
              destination promotion in China is ‘City plus Nature’ or
              ‘Accessible Nature’ and the broader element of ‘naturalness’.
            </p>
            <p>
              Embedding the visitor economy within wider NSW Government policy
              priorities the NSW Government will take the lead in ensuring that
              the broader economy sectors are considered when looking at visitor
              services and activities. It is therefore essential that NSW
              Government departments and agencies realise the benefits and work
              together to grow the visitor economy.
            </p>
            <p>
              Research commissioned by the Taskforce showed that many NSW
              destinations are not perceived as unique or appealing to domestic
              visitors. Consumer recognition for many NSW regional destinations
              was not strong, even amongst NSW residents. Reference this is an
              important one for us as name recognition (GKNP) would help
              highlight the natural advantages of this region.
            </p>
            <p>
              One specific action of the Visitor Economy Taskforce developed by
              the current NSW government states:’Recommendation 19. Ensure that
              key tourism destinations and precincts are protected against
              encroachment by other forms of development activity which may
              impact on their sustainability or potential to contribute to the
              visitor economy’. DNSW, NSW T&I Relevant NSW Government agencies
              Supported in principle, This will be considered in the development
              of the new destination management planning system. Reference page
              33.
            </p>
            <Subtitle>The alternative to the GKNP</Subtitle>
            <p>
              This region has some of the most diverse tall forests in the
              world, the GKNP will put many of them into conservation, but not
              everyone supports the park and the alternative is much less
              positive for our koalas and forests.
            </p>
            <p>
              The NSW Department of Primary Industry (DPI) has put forward a{" "}
              <a href="https://www.dpi.nsw.gov.au/about-us/media-centre/releases/2017/north-coast-forests-offer-untapped-bioenergy-opportunity">
                plan to build three wood-burning power stations
              </a>{" "}
              in the region that would be fueled by logging waste like small
              trees, unmillable logs and crowns from our native forests.
            </p>
            <p>
              <a href="http://www.nrc.nsw.gov.au/_literature_240609/Supplementary%20advice%20IFOA">
                FCNSW along with DPI also have plans to open up around 70%
                percent of the remaining old growth forests
              </a>{" "}
              within the state forest estate to harvesting, these forests have
              been protected for the last 20 years and are an important part of
              our current reserve system. These changes offer a temporary boost
              to dwindling timber supplies but do not offer future supply
              certainty and will have a negative impact on our tree hollow
              dependant wildlife.
            </p>
            <p>
              There are also plans afoot to open up about 140 000 hectares of
              coastal forest to a virtual clearfelling regime with up to 90%
              canopy removal. These forests are some of the most important koala
              habitat and the regions coastal forests are currently already
              under massive pressure from logging, development and land clearing
              on private property. On top of the 140 000-hectares, other forests
              in the region will be subject to higher intensity harvesting under
              new IFOA rules. Again this is to bolster unrealistic timber supply
              contracts. The Great Koala National Park offers a better
              alternative for our koalas and the regions economy.
            </p>
            <Subtitle>A park for everyone</Subtitle>
            <p>
              There is a go to argument against protected areas: that they will
              “lock forest users out”. The GKNP proposes to be a more inclusive
              national park that will cater for more traditional forest users
              like dog walkers, horse riders, four wheel drives and mountain
              bikes. This will be done by using two different land tenures
              within the park. High conservation value forests, sensitive areas,
              and key koala habitat will become national parks while lower
              conservation value areas and important places for recreation will
              be zoned as regional parks.
            </p>
            <p>
              These different levels of protection would take into account a
              number of different factors including conservation value and
              potential for recreation opportunities in a way that would mean
              different activities are unlikely to clash, and all park users can
              enjoy various activities without impacting on each other or
              important conservation areas.
            </p>
            <p>
              The footprint of the GKNP takes in a number of different existing
              parks and reserves, These conservation areas will retain the
              existing names, staff and management plans under the GKNP
              proposal. Since much of the proposed park is degraded forest that
              has been subjected to heavy industrial logging, weed invasion and
              bell minor die back, so a big part of the GKNP proposal will be
              jobs in bush regeneration and habitat restoration, with an
              emphasis in restoring koala feed trees. The GKNP will not include
              any hardwood or softwood plantation forests.
            </p>
            <Subtitle>Visitor Center Network</Subtitle>
            <Subtitle>
              Walking Track Network — the GKNP will include a number of new
              walking tracks.
            </Subtitle>
            <p>
              The network will be across existing and new reserves with the
              crown jewel being a massive 200 plus kilometre walk. Starting from
              the town of Bowraville, it will follow the mountains west all the
              way to Point Lookout then around the watershed to near Deer Vale,
              where it will plunge down into the Bellinger River National Park,
              running around to the Dorrigo Rainforest Center then through the
              mountains to Tuckers Knob where the trail will split — north-east
              to Coffs Harbour via Sealy Lookout or east to the GKNP Visitor
              Center near Repton on Mailmans Track. The GKNP will also include a
              75 km extension to the coastal walking track from Yamba to Sawtell
              — the extension will run south from Sawtell, all the way to the
              lighthouse at Smokey Cape near South West Rocks. The GKNP will
              also include a number of shorter tracks, new picnic areas and
              lookouts.
            </p>
            <Subtitle>Bike Track Network</Subtitle>
            <p>
              <b>Mountain biking case study — Derby in Tasmania</b>
            </p>
            <p>
              Since 2015,{" "}
              <a href="http://www.abc.net.au/news/2017-12-26/mountain-bike-trails-driving-major-change-in-derby/9276384">
                when about 30 kilometres of trails were opened to rave reviews
              </a>{" "}
              — the first stage of a planned 80km network costing $3.1 million —
              mountain bikers have been leaving their mark everywhere around
              Derby.
            </p>
            <ul>
              <li>30,000 visitors on the trails every year</li>
              <li>
                tourists are staying four to five nights in Derby, then another
                five days elsewhere in Tasmania
              </li>
              <li>
                It adds up to an estimated $30 million-a-year return on that
                $3.1 million investment.
              </li>
            </ul>
            <p>
              The Great Koala National Park could offer local mountain bike
              clubs security of tenure allowing them to apply for funding and
              develop tracks and businesses within the park.
            </p>
          </TextBox>
        </ParallaxCont>
        <Footer />
      </Parallax>
    </Container>
  );
};

export default KoalaNationalPark;
