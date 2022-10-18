import React from "react";
import styled from "styled-components";
import breakpoints from "../components/breakpoints";
import { Parallax } from "react-parallax";
import "../App.css";

import NavBar from "../components/navbar";
import HorizButtonBar from "../components/horizButtonBar";
import Footer from "../components/footer";

import BgImage01 from "../images/one.jpg";
import KalangMap from "../images/kalang-map.png";
import NSWMap from "../images/fokhMap.jpg";
import Scat from "../images/scat-fok.png";

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
  background-color: rgba(200, 200, 200, 0.9);
  padding: 2vh;
  margin: 2vh;
`;

const Subtitle = styled.div`
  font-size: 1.5em;
  text-transform: uppercase;
  text-align: center;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Table = styled.table`
  width: 100%;
  padding: 10px;
`;

const TRow = styled.tr`
  &:nth-child(odd) {
    background-color: rgba(203, 203, 203, 0.3);
  }
`;

const Kalang = () => {
  return (
    <Container>
      <NavBar />
      <Parallax bgImage={BgImage01} strength={0}>
        <TopBackgroundImage>
          <Text>
            <h1>Kalang Headwaters Campaign</h1>
            <p>
              <b>The Friends of Kalang Headwaters</b> [FOKH] is a
              community-based organisation, including the Bellingen Environment
              Centre, Kalang River Forest Alliance, National Parks Association
              of NSW, businesses, and individuals from our community.
            </p>
            <Subtitle>Mission</Subtitle>
            <p>
              To protect, promote and preserve the cultural and natural heritage
              of the Kalang river forests and headwaters from logging.{" "}
            </p>
            <Subtitle>Goals</Subtitle>
            <p>
              Achieve permanent protection of the Kalang forests and headwaters
              by extending the Baalijin Nature Reserve via the Headwaters
              Conservation Proposal – A nature reserve for the Upper Kalang,
              Middle Bellinger and Nambucca Rivers (Headwaters Conservation
              Reserve);
            </p>
            <p>Support the Great Koala National Park campaign.</p>
            <p>Achieve these goals through non-violent, direct action. </p>
            <Subtitle>The Kalang Headwaters</Subtitle>
            <Subtitle>History</Subtitle>
            <p>
              The mature native forests of the Kalang Headwaters provide a
              safety and buffer zone to old growth trees and rain forested areas
              at the headwaters of the Kalang River and its tributaries,
              filtration to the river system, as well as habitat for a myriad of
              threatened and endangered flora and fauna. This land is
              Gumbaynggirr Nation Country and important to maintaining their
              cultural heritage.
            </p>
            <p>
              Logging in this steep fragile environment with a high annual
              rainfall will inevitably, as it has historically, result in heavy
              run off and sedimentation of the pristine Roses Creek and the
              Kalang River. This increased turbidity and associated
              sedimentation reduces water flows through siltation and smothers
              aquatic flora and fauna.{" "}
            </p>
            <p>
              Environment groups, community members, businesses and the
              residents of the Kalang valley, some of whom rely on the river’s
              clean water for drinking, cooking and the watering of organic
              crops and stock are united in their goal to have these areas so
              vital to preserving a healthy water supply protected from an
              inevitable damage.
            </p>
            <p>
              {" "}
              In 1992 a Department of Land and Water Conservation (DLWC) report
              found the Forestry Commission and its contractors had repeatedly
              breached soil-erosion control guidelines, creating several major
              landslips on Catbird Road in Oakes State Forest. DLWC estimated
              that over 88,000 tonnes of soil had been mobilised towards the
              headwaters of the Bellinger River near Mt Killiekrankie on the NSW
              Mid North Coast. In places, whole sections of land and vegetation
              moved en masse as the foundation rocks sheared. The river’s
              tributary creeks down slope of road works and logging operations
              were choked with spoil and rubble six feet deep in places.
              Downstream the creeks ran red with sediments. Evidence of this is
              still visible today. The steep terrain of the proposed logging
              operation in Oakes and Roses Creek SF, is again setting the scene
              for another possible mass erosion event.
            </p>
            <p>
              Forestry Corporation is now able to log on steeper slopes, and
              buffer zones to fourth order streams ha to get to the big, old
              trees so vital to our threatened species. Extensive forests of big
              trees are the seed banks for making rain and we need greater
              protection for our waterways, not less.
            </p>
            <p>
              Any logging in the proposed Headwaters Conservation Reserve
              (Buckra Bendinni, Rose’s Creek, Scotchman Oakes and Die Happy
              State Forests) is inconsistent with the protection and
              conservation of forest values including, water quality and
              quantity, biodiversity, ecosystem services and carbon storage
              required by the Bellingen community. We therefore call on the NSW
              Government to permanently end logging immediately and create the
              Headwaters Conservation Reserve protect the headwaters and
              tributaries of the Kalang, Bellinger and Nambucca Rivers in
              perpetuity.
            </p>
            <p>
              The community ran a successful camp in the Kalang State forests
              (biodiversity Embassy) for 4 months until the November closure of
              public forests due to the risk of fires. This camp stopped logging
              in the headwaters and drew attention of the issue to the broader
              community, and is now reopening. Morning vigils have continued
              throughout this period. Vigil, and camp, have helped to provide a
              visible presence, met incoming vehicles and explained the concerns
              of the community.
            </p>
            <p>
              A comprehensive reserve proposal has been prepared and submitted
              to the Minister. This proposal is supported in principle by
              Bellingen Shire council. The Friends of Kalang Headwaters (FOKH)
              has weekly meetings and is made up of individuals and alliances
              with Kalang River and Forest Alliance, Bellingen Environment
              Centre Inc and National Parks Association. This Strategic Plan is
              formulated to direct and prioritise FOKH’s actions. As such FOKH
              recognises that there are many others within the Bellingen, and
              the wider communities, that are working as individuals to stop the
              proposed logging of the Kalang Headwaters and are grateful for
              their continual efforts.
            </p>
            <Subtitle>ORIGIN AND INTENT OF THIS RESERVE PROPOSAL</Subtitle>
            <p>
              The reserve proposal encompassing the forests of the Upper Kalang,
              Middle Bellinger and Nambucca Rivers are public land. The Friends
              of the Kalang Headwaters (FoKH) have commissioned this proposal to
              ensure permanent protection of these forests within a formal
              conservation reserve, particularly for ensuring water security at
              a time of unprecedented water shortage. FoKH is an affiliation of
              the Bellingen Environment Centre, Kalang River Forest Alliance,
              National Parks Association of NSW and other organisations, and has
              joined with concerned members of the local community to form a
              coordinated effort to protect, promote and preserve the natural
              and cultural values of the forests in this reserve proposal, and
              to seek their immediate, permanent protection.
            </p>
            <p>
              Intensive expert ecologist-led and community biodiversity
              assessment work has been focused within Scotchman State Forest
              (compartments 125&126) and Roses Creek State Forest (compartments
              127&128). This has resulted in a significant number of new records
              of key threatened flora and fauna species, major range extensions
              and a great improvement in the understanding of the distribution
              and abundance of many species within this part of the public
              forest estate. These results are likely to be replicated, or
              potentially improved upon, with equivalent survey effort in other
              compartments and State Forests across the proposed reserve. High
              intensity Biodiversity Assessment results from Compartments
              125-128 highlight the national conservation values within these
              forests; reservation is compatible with the maintenance of these
              values.
            </p>
            <p>
              From discussions with traditional custodians and representatives
              of the Gumbaynggirr Nation it is apparent that there are many
              cultural values across the proposed reserve, these values will be
              best maintained with the cooperative and protective management
              strategies of a conservation reserve.
            </p>
            <p>
              The reserve proposal encompasses the entirety of the Upper Kalang
              River headwaters, the Bellinger River catchment and part of the
              Nambucca River catchment. Within this reserve proposal is all of
              Buckrabendinni, Roses Creek and Oakes State Forests and part of
              Diehappy, Irishman and Scotchman State Forests.
            </p>
            <ImgContainer>
              <Image
                src={KalangMap}
                alt="Map of Kalang headwaters showing forest types"
              />
            </ImgContainer>
            <Subtitle>STATEMENT OF VALUES AND SIGNIFICANCE</Subtitle>
            <p>
              The proposal covers 13,233 ha of public land that provides
              connectivity between the New England and Dorrigo National Parks
              Gondwana World Heritage properties as well as connecting these
              reserves with both Baalijin and Juugawaarri Nature Reserve and
              Gumbaynggirr National Park and State Conservation Area. This
              proposed reserve contains extensive areas of nationally
              significant intact and inter-connected tall wet sclerophyll
              forests at low to mid elevation. These forests are interspersed
              with subtropical rainforest communities and contain extensive
              areas of old growth forest. These ecosystems are in excellent
              condition, mostly lacking environmental weeds and feral animals,
              and support intact and functional populations of threatened apex
              predators such as the Spotted-tailed Quoll (Dasyurus maculatus)
              and Powerful Owl (Ninox strenua)and other threatened species, such
              as the Long-nosed Potoroo (Potorous tridactylus), that are
              responsible for keystone ecosystem health functions.
            </p>
            <p>
              There is strong and emerging evidence of the antiquity and
              stability of aquatic ecosystems in the Bellinger Valley, with many
              specific elements of these ecosystems representing amongst the
              oldest and most stable freshwater ecosystems on the planet. These
              aquatic ecosystems supply residents of Urunga and Bellingen with
              their drinking water supply and for future water security every
              effort must be expended to ensure the continued availability of
              adequate flows of clean water from the headwaters.
            </p>
            <p>
              Aquatic ecosystems in drainage lines within and adjoining this
              reserve proposal in the Upper Bellinger Valley are known to
              support remnant populations of the Critically Endangered Bellinger
              River Snapping Turtle, Myuchelys georgesii; this species in
              considered amongst the most ancient of known chelid turtles.
              Genetic dating work for this species has indicated an evolutionary
              age of approximately 80 million years, a lineage considerably
              pre-dating the extinction of the dinosaurs.
            </p>
            <p>
              The forests of the proposed reserve represent core habitat for a
              great diversity of threatened and declining forest fauna species,
              notably supporting a nationally significant interconnected
              breeding population of Koalas, many hollow-dependent and ancient
              threatened species and large complexes of the Lowland Subtropical
              Rainforest threatened ecological community, protected under the
              Commonwealth Environment Protection and Biodiversity Conservation
              Act 1999 (EPBC Act) Car Reserve System and JANIS Criteria.
              Collectively these forests comprise a key component of a core
              Gondwanan refuge that is of critical significance for the survival
              of ancient ecosystems and species such as the Rufous Scrub-bird
              (Atrichornis rufescens), Sphagnum Frog (Philoria sphagnicolus ),
              Stuttering Frog (Mixophyes balbus) and the many species of
              passerine birds inhabiting these forests (such as the Superb
              Lyrebird (Menura novaehollandiae) and the Southern Logrunner
              (Orthonyx temminckii) that are known to represent the most
              primitive and basal lineages of all passerines.
            </p>
            <p>
              The reserve proposal covers a significant and unique section of
              both the Great Escarpment and the adjoining Great Eastern Ranges
              forests. The Great Escarpment in the hinterland of Bellingen
              andBowraville broadly follows the Horseshoe Road and is a key
              element of this continental-scale wildlife corridor. Beyond the
              proposed reserve, elevation extends to in excess of 1500m above
              sea level, meaning that the reserve is a key component of the
              shortest (and in many parts the steepest) intact gradient of
              native vegetation connecting habitats from sea level to the
              subalpine ecosystems on the continent. Management of this entire
              landscape has important implications for the globally significant
              assemblage of biodiversity known to be dependent upon it.
              Industrial logging of these forests is simply not compatible with
              maintenance and the future viability of this astonishing natural
              heritage legacy.
            </p>
            <p>
              Because of the high level of ecosystem intactness and the very
              broad connectivity of the forests of the proposed reserve, many of
              the threatened fauna species known to occupy these forests are
              able to migrate broadly. This enables long-distance genetic
              exchange and interbreeding, thereby supporting genetically diverse
              large and viable populations of species that have become extinct
              across much of their historic range (e.g. Koala, Rufous
              Scrub-bird, Greater Glider and Long-nosed Potoroo). If allowed to
              continue to structurally develop, following extractive forest
              management 30-50 years previously, these forests will have
              improved capacity to support many sensitive and threatened
              species; this is particularly the case for hollow-dependent
              threatened fauna species.
            </p>
            <Subtitle>WATER RESOURCE VALUES AND WATER SECURITY</Subtitle>
            <p>
              With widespread extreme and record drought conditions now
              afflicting much of the eastern seaboard of Australia, many rivers
              that have never ceased flowing in recorded history have now
              stopped flowing. Because of the extensive forest cover in their
              headwaters the Bellinger and Kalang Rivers are still flowing cool
              and clean, despite historically low rainfall in recent years. The
              retention of all forest cover in these catchments must be a
              priority to ensure water security for the residents of the
              Bellingen and Nambucca Shires and for the viability of
              agricultural, fishing and tourism industries.
            </p>
            <p>
              There is a substantial body of evidence globally that forests
              create rainfall as well as moderating climatic extremes.
              Maintenance and enhancement of forest cover across the Bellinger,
              Kalang andNambucca River Headwaters will be important for the
              maintenance of rainfall in the region and for the moderation and
              reduction of climatic extremes happening as a consequence of
              global climate heating. There are good prospects for retention of
              water and maintenance of stream flows in the Bellinger, Kalang and
              Nambucca Rivers into the future if all the headwater forests are
              protected.
            </p>
            <Subtitle>CARBON STORAGE VALUES</Subtitle>
            <p>
              The forests within the proposed Headwaters reserve are a diverse
              mixture of tall rainforest and eucalypt dominated forest
              communities with a high biomass, occurring within a high rainfall
              landscape with a stable and moist microclimate. Although the soils
              and parent rocks underlying most of the proposed reserve are
              relatively infertile, the primary productivity of these forests is
              high, resulting in large existing volumes of stored carbon and a
              very high potential for significant additional carbon storage as
              these forests regenerate and structurally mature after selective
              logging 30-50 years previously. If protected these forests will
              continue to structurally develop over the decades and centuries to
              come and will draw down and store atmospheric carbon.
            </p>
            <p>
              There is an excellent opportunity to allow these forests to
              continue to structurally develop and to build biomass. The
              processes of structural development occurring in these forests
              following historic logging (30-50 years previously) create
              additional habitat resources for hollow-dependent species and for
              primitive Gondwanan species that are dependent upon a stable cool
              moist microclimate. As these forests structurally develop they
              increase in biomass, this enables the storage of greater volumes
              of water and provides a growing buffer against future droughts and
              heatwaves because of the known “air-conditioning” and
              cloud-seeding properties of these forests.
            </p>
            <Subtitle>KOALA HABITAT VALUES</Subtitle>
            <p>
              Native forests of the Upper Mid North Coast (Nambucca to Clarence
              Valley) are known to support a significant proportion of the
              population of the state population, there are some indications
              that 20% of the NSW Koala population resides in these forests. The
              headwaters of the Bellinger, Kalang and Nambucca Rivers are
              completely connected by forest cover, enabling the movement and
              interbreeding (and hence survival) of Koalas across the entire
              proposed reserve. Sections of the proposed Reserve are well-known
              Koala breeding hotspots and there are reliable indications of the
              occupation of healthy breeding Koalas across all sectors of the
              reserve proposal.
            </p>
            <p>
              Preliminary professional ecological and community-led Koala
              surveys have focused on Compartments 125&126 Scotchman State
              Forest and Compartments 127&128 Roses Creek State Forest.
              Substantial evidence of Koalas has been gathered from across these
              four compartments including many direct observations of animals,
              substantial acoustic evidence, camera-trap evidence and the
              identification of feed trees spread across all four compartments
              from scat searches.
            </p>
            <img src={Scat} alt="Photo of koala scat at Roses Creek" />
            <p>
              Koala feed tree species and those occupied by Koalas that were
              documented during the surveys of compartments 125-128 include
              Tallowwood, Eucalyptus microcorys, New England Blackbutt, E.
              campanulata, Coastal Blackbutt, E. pilularis, White Mahogany, E.
              acmenoides, Forest Oak, Allocasuarina torulosa, Brush Box,
              Lophostemon confertus and Turpentine, Syncarpia glomulifera. A
              distinct feature of the forests across Compartments 125-128 is the
              near-complete absence of environmental weeds. Few weeds are
              present in low numbers. Weeds are mostly Lantana, Crofton Weed and
              Mistflower along roads and trails with very few apparent in core
              forest areas of these compartments. The general lack of weeds is a
              consequence of the lack of extractive forest management activities
              for 30-50 years and there has been negligible disturbances that
              have facilitated or enabled weed invasion. With a nationally
              significant Koala population there is a management priority to
              ensure that areas of habitat that are currently well utilised with
              a relatively open under storey remain free from Lantana, and that
              other weed-generating ground disturbances are avoided.
            </p>
            <p>
              A diversity and abundance of Koala feed trees are present in the
              complexes of wet and dry sclerophyll forest communities across the
              proposed reserve. Patches of rainforest vegetation within this
              forest matrix are cool moist refuges that Koalas move into during
              heatwave conditions, enabling their survival in such adverse
              climatic conditions.
            </p>
            <Subtitle>
              POPULATIONS OF GREATER GLIDER AND LONG-NOSED POTOROO ACROSS
              COMPARTMENTS 125-128
            </Subtitle>
            <p>
              Expert ecologist and community spotlighting and camera-trap
              surveys in compartments 125&126 Scotchman State Forest and
              compartments 127&128 of Roses Creek State Forest have confirmed
              the presence of breeding populations of both the Greater Glider,
              Petauroides Volans and the Long-nosedmPotoroo, Potorous
              tridactylus within the boundaries of these localities.
            </p>
            <Subtitle>CLIMATE</Subtitle>
            <p>
              The climate is humid-subtropical with a peak in rainfall during
              late summer and autumn. Cyclonic and ex-cyclonic weather events
              and East Coast lows can deliver extremely high rainfall
              intensitiesand rainfall totals occasionally exceeding 1000mm per
              event. Temperatures rarely exceed 35C and winter frosts are common
              in low lying and exposed landscapes. Average annual rainfall
              across the proposed reserve varies from approx. 1300mm – over
              2000mm per annum (Bureau of Meteorology data).
            </p>
            <Subtitle>DRAINAGE, WATER USE AND WATER USERS</Subtitle>
            <p>
              Three major river systems drain eastwards from the proposed
              reserve, from north to south, the Bellinger, Kalang and Nambucca
              Rivers. The Bellinger River is the largest catchment with the most
              extensive and diverse aquatic ecosystems within the proposed
              Reserve. With a much larger catchment area the Bellinger River
              also has a substantially greater volume of flow than either the
              Kalang or Nambucca Rivers. Part or all of the following
              sub-catchments are within the Bellinger River catchment section of
              the proposed Reserve: Angys, Clear, Cleavers, Diehappy and Fishers
              Creek.
            </p>
            <p>
              Sub-catchments of the Kalang River section of the proposed reserve
              include Middle Camp and RosesCreek on the northern boundary of the
              Kalang River catchment and Graces Creek flowing southwards into
              the Nambuca River. Sub-catchments within the
              Nambucca/Buckrabendinni section of the proposed Reserve include
              Argents, Gravelly, Stinging Tree and Sullivans Creeks and Bottle
              Gully.
            </p>
            <p>
              In the Bellinger River catchment all municipal water supply,
              limited agricultural irrigation and substantial stock and domestic
              supply is derived from the main channel of the river; residents of
              Urunga and Bellingen are therefore critically reliant upon the
              maintenance of water quality and ofwater security (water
              quantity). In both the Kalang and Nambucca River catchments there
              are a range of water users including stock and domestic uses and
              agricultural irrigation.
            </p>
            <Subtitle>ELEVATION AND TOPOGRAPHY</Subtitle>
            <p>
              Elevation in the Bellinger River section of the proposed reserve
              ranges from approximately 80mnabove sea level (asl) along the main
              river channel at Orama, to 820m asl at the top of both Angys and
              Clear Creek sub-catchments. In the Kalang River catchment,
              elevation ranges from 80m asl along the Kalang River at Upper
              Kalang to 850m asl between Bellbucca and Owl Road and adjoining
              Hawk Road in the far west and southwest of the catchment. In the
              Nambucca River catchment elevation ranges from 90m asl along
              Gravelly Creek to 850m asl along Hawk Road in the far north of
              them catchment.
            </p>
            <p>
              The forests of the Bellinger, Kalang and Nambucca Valleys are
              unique in their steepness and vulnerability to erosion, structural
              failure and mass-movement, particularly during the frequent
              intense rainfall events that occur. The structural failings of the
              landscape are because of the dominance and weaknesses of the
              underlying Nambucca shale beds. In upper catchment areas there are
              few if any areas of gentle relief and many slopes across the
              proposed reserve are precipitously steep.
            </p>
            <Subtitle>LANDFORM AND LANDSCAPE</Subtitle>
            <p>
              A significant proportion of the proposed reserve is the broadly
              arcing ridge upon which the Horseshoe Road is positioned. This arc
              of ridges separates the Bellinger Valley from the Kalang Valley
              and the Nambucca Valley as well as separating parts of the Kalang
              Valley from the Nambucca Valley. Across a large proportion of its
              length there are precipitous slopes either side of the Horseshoe
              Road, and headwater tributaries are all steep in the upper reaches
              and quickly reach their confluence with the major stream channels
              on the valley floor.
            </p>
            <Subtitle>VEGETATION COMMUNITIES</Subtitle>
            <p>
              The vegetation of the area varies from dry open forest on the
              exposed ridges to moist tall open forest on sheltered slopes to
              well-developed rainforest on sheltered creek flats and gullies.
              Forest Types are described in Research Note No. 17 (Forestry
              Commission of NSW 1989), as the descriptors of vegetation. Forest
              Types are a relatively simple classification of vegetation mainly
              based on commercial timber species. The Forest Type mapping maps
              just over half the area as Dry Blackbutt (FT 37), with Brush Box
              (FT 53) and Myrtle (FT 23) the only other types mapped on more
              than 10% of the area. A number of other Forest Types occupy
              smaller areas. There are other more ecologically based
              classifications of vegetation communities notably forest
              ecosystems, that are available.
            </p>
            <p>
              In the proposal area much of the area mapped as Dry Blackbutt (FT
              37) would be better assigned to Moist Blackbutt (FT 36), and much
              of the area mapped as Myrtle (FT 23) is not a dry rainforest type
              and should be assigned to either Corkwood – Sassafras – Crabapple
              – Silver Sycamore (FT 3) or one of the warm temperate Forest
              Types.
            </p>
            <p>
              The following descriptions of the more extensive Forest Types are
              based on available site data from earlier surveys and unpublished
              field notes.
            </p>
            <h4>Dry Blackbutt (FT 37)</h4>
            <p>
              On dry ridges and exposed slopes an open to tall open forest
              dominated by Blackbutt Eucalyptus pilularis occurs. Other canopy
              species include New England Blackbutt E. campanulata, Tallowwood
              E. microcorys, Turpentine Syncarpia glomulifera, Diehard
              Stringybark E. cameronii and Broad-leaved White Mahogany E.
              carnea. There is often a small tree layer of Forest Oak
              Allocasuarina torulosa, Black Oak A. littoralis and Daviesia
              arborea. The ground layer includes small shrubs (such as Prickly
              Shaggy Pea Podolobium ulicifolium, Crinkle Bush Lomatia silaifolia
              and Beard Heath Leucopogon lanceolatus), as well as Bracken Fern
              Pteridium esculentum, Spiny-headed Matt-rush Lomandra longifolia
              and Wiry Panic Entolasia stricta.
            </p>
            <h4>Moist Blackbutt (FT 36)</h4>
            <p>
              This type is much more extensive than mapped by existing Forest
              Type mapping, particularly on steep sheltered slopes south of the
              Horseshoe Road. On more sheltered sites a moister tall open forest
              dominated by Blackbutt Eucalyptus pilularis occurs. Other canopy
              species include Tallowwood E. microcorys, Turpentine Syncarpia
              glomulifera, Brush Box Lophostemon confertus, White Mahogany E.
              acmenoides and Sydney Blue Gum E. saligna. The small tree and
              shrub layer includes Forest Oak Allocasuarina torulosa, Blackwood
              Acacia melanoxylon, Soft Corkwood Akama paniculosa, Rough Treefern
              Cyathea australis, Daviesia arborea and Rose Myrtle
              Archirhodomyrtus beckleri. Ground layer species include Gristle
              Fern Blechnum cartilaginium, Coopernookia chisolmii, Bracken Fern
              Pteridium esculentum, Soft Bracken Calochleana dubia and
              Spiny-headed Matt-rush Lomandra longifolia.
            </p>
            <h4>Brush Box (FT 53)</h4>
            <p>
              On sheltered lower slopes often adjacent to rainforest vegetation
              a moist tall open forest dominated by Brush Box Lophostemon
              confertus occurs. Other common canopy species include Sydney Blue
              Gum Eucalyptus saligna, Tallowwood E. microcorys and Blackbutt E.
              pilularis. There is usually a well-developed small tree layer of
              species such as Blackwood Acacia melanoxylon, Soft Corkwood Akama
              paniculata, Murrogun Cryptocarya microneura and Forest Oak
              Allocasuarina torulosa. Shrubs such as Rose Myrtle
              Archirhodomyrtus beckleri, Forest Maple Cryptocary rigida and
              Bolwarra Eupomatia laurina, and the vines Five-leaved Water Vine
              Cissus hypoglauca, Giant Water Vine Cissus antarctica and Austral
              Sarsaparilla Smilax australis are often present. The ground layer
              is generally sparse with Soft Bracken Caloclaena dubia and Native
              Ginger Alpinia caerulea the most frequent species.
            </p>
            <h4>
              Rainforest Communities (mapped as Myrtle (FT 23) and Corkwood –
              Sassafras – Crabapple – Silver Sycamore (FT 3))
            </h4>
            <p>
              On sheltered creek flats, particularly along the upper Kalang
              River, a well-developed subtropical rainforest occurs. This is
              dominated by large Yellow Carabeen Sloanea woollsii, Brush Box
              Lophostemon confertus and Strangling Fig Ficus watkinsiana with
              occasional emergent large mature Flooded Gum Eucalyptus grandis.
              Other tree species present include Coachwood Ceratopetalum
              apetalum, Red Carabeen Geissois benthamiana, White Beech Gmelina
              leichhardtii and Northern Acradenia Acradenia euodiiformis. Common
              midstorey species and shrub include Bangalow Palm Archontophoenix
              cunninghamiana, Prickly Tree Fern Cyathea leichardtiana and
              Featherwood Polyosma cunninghamii. The ground layer is generally
              sparse with Adiantum sylvaticum, Cyperus filipes and Strap Water
              Fern Blechnum patersonii present.
            </p>
            <p>
              At higher elevations, such as on the southern slope of Boot Hill
              are areas of warm temperate rainforest. Canopy species include a
              number of tree species such as Sassafras Doryphora sassafras,
              Black Booyong Heritiera actinophylla, Soft Corkwood Akama
              paniculata, Black Wattle Callicoma serratifolia, Prickly Ash
              Orites excelsa, Pencil Cedar Polyscias murrayi, Coachwood
              Ceratopetalum apetalum and Northern Acradenia Acradenia
              euodiiformis. Common mid-storey and shrub species include Rough
              Tree Fern Cyathea australis, Grey Possumwood Quintinia verdonii,
              Five-leaved Water Vine Cissus hypoglauca and Walking Stick Palm
              Linospadix monostachyos. Ground layer includes the ferns
              Lastreopsis microsora and Strap Water Fern Blechnum patersonii.
            </p>
            <p>
              The narrower gullies and creeks contain less well developed
              examples and gradations between these two rainforest communities.
            </p>
            <p>
              These areas of rainforest would probably include the following
              Floyd suballiances:
            </p>
            <ul>
              <li>
                Suballiance 12 Sloanea woollsii-Dysoxylum
                fraserianum-Argyrodendron actinophyllumCaldcluvia
              </li>
              <li>
                Suballiance 33 Ceratopetalum/Schizomeria-Argyrodendron/Sloanea
              </li>
              <li>Suballiance 35 Ceratopetalum/Schizomeria-Doryphora</li>
            </ul>
            <p></p>
            <h4>New England Blackbutt (FT 163)</h4>
            <p>
              On higher altitude exposed ridges Blackbutt Eucalyptus pilularis
              tends to be replaced by New England Blackbutt E. campanulata. Mid
              and under-storey species are similar to those found in the Dry
              Blackbutt community.
            </p>
            <p>There are also small areas of the following Forest Types:</p>
            <ul>
              <li>Grey Gum – Grey Ironbark – White Mahogany (FT 62a)</li>
              <li>Tallowwood – Sydney Blue Gum (FT 47)</li>
              <li>Fig – Giant Stinger / Myrtle (FT 23)</li>
              <li>
                Narrow-leaved White Mahogany – Red Mahogany – Grey Ironbark –
                Grey Gum (FT 60)
              </li>
              <li>Sydney Blue Gum (FT 46)</li>
              <li>River Oak (FT 211)</li>
              <li>Rock (FT 234)</li>
              <li>Improved Pasture and Cropland (FT 216)</li>
            </ul>
            <Subtitle>
              Significant vegetation communities and plant species
            </Subtitle>
            <h4>Endangered Ecological Communities</h4>
            <p>
              Some parts of the mapped rainforest could be included in the
              following listed communities:
            </p>
            <ul>
              <li>
                Lowland Rainforest in NSW North Coast and Sydney Basin
                Bioregion; listed in NSW as an Endangered Ecological Community
              </li>
              <li>
                Lowland Rainforest of Subtropical Australia: listed Federally as
                Critically Endangered
              </li>
            </ul>
            <h4>Listed Threatened Species</h4>
            Milky Silkpod Parsonsia dorrigoensis:
            <ul>
              <li>Conservation status in NSW: Vulnerable</li>
              <li>Commonwealth status: Endangered</li>
              <li>
                Milky Silkpod is locally common, particularly at intermediate
                altitude, in moist and dry Blackbutt communities.
              </li>
            </ul>
            Scrub Turpentine Rhodamnia rubescens:
            <ul>
              <li>
                Conservation status in NSW: Critically Endangered.
                <br />
                Scrub Turpentine was a common under and mid storey species but
                it has been severely affected by Myrtle Rust Austropuccinia
                psidii in recent years.
              </li>
            </ul>
            Rusty Plum Niemeyera white:
            <ul>
              <li>
                Conservation status in NSW: Vulnerable Rusty Plum is rare in low
                altitude rainforest patches.
              </li>
            </ul>
            <h4>Other species and features of significance</h4>
            Speculantha amabilis:
            <p>
              This recently described orchid (Jones and Copeland 2014) was
              observed in dry Blackbutt forest near Sirius Road. The known
              habitat of this species is generally tall moist forest or Snow Gum
              woodland at high elevations, mainly above about 1300m, in the
              vicinity of Point Lookout in New England National Park. So, this
              occurrence at about 550m in dry open forest is of significance (L.
              Copeland pers. comm. 2107).
            </p>
            <br />
            Old Growth Forest
            <p>
              Significant areas of high conservation value old growth forest
              occur within the proposal area. Such old growth forest provides
              important nest and roost resources for a number of threatened
              fauna species, such as large forest owls and gliders.
            </p>
            Eucalypt Diversity
            <p>
              The Coffs Harbour region is recognised as having exceptionally
              high diversity of tall eucalypt species. In the small area of this
              proposal 16 species of tall forest trees have been recorded (11
              Eucalyptus, 3 Corymbia, Lophostemon confertus and Syncarpia
              glomulifera).
            </p>
            Glossy Black Cockatoo feed trees
            <p>
              The small trees Forest Oak Allocasuarina torulosa and Black Oak
              Allocasuarina littoralis are common in much of the non-rainforest
              area. These trees provide food for the Vulnerable Glossy
              Black-cockatoo.
            </p>
            Floristic Diversity
            <p>
              Over 300 plant species have been recorded in the proposal area.
            </p>
            <Subtitle>references</Subtitle>
            <p>
              Forestry Commission of New South Wales 1989: Research Note No. 17
              Forest Types in New South Wales, <br />
              <br />
              Floyd AG (1990a). Australian Rainforests in New South Wales.
              Surrey Beatty and Sons Pty Limited, Chipping Norton, NSW
              <br />
              <br /> Jones D.L. and Copeland L.M 2014 Speculantha amabilis
              (Orchidaceae: Pterostylinidae), a new species of Tiny Greenhood
              from the Northern Tablelands of New South Wales. The Australian
              Orchid Review October-November 2014. <br />
              <br />
              <h4>
                Critically Endangered Lowland Rainforest – EPBC Act 1999
              </h4>{" "}
              The reserve proposal also contains significant areas of lowland
              rainforest. Since European settlement Lowland Rainforest has
              undergone a large reduction in geographic distribution
              (particularly its area of occupancy) due to clearing (Floyd 1990a,
              b). For example, Floyd (1990a) estimated the Big Scrub lowland
              rainforest near Lismore, originally estimated to cover 75 000 ha,
              had been reduced to only 300 ha (0.07%) since European settlement.
              Other districts as far south as Ourimbah have suffered similar
              losses of Lowland Rainforest. Relative to the longevity of
              rainforest trees, many of which live for several hundred years,
              these represent large reductions in the geographic distribution of
              the community. ‘Clearing of native vegetation’ is listed as a Key
              Threatening Process under the then NSW Threatened Species
              Conservation Act.
              <br />
              <br /> Extensive clearing of Lowland Rainforest has resulted in
              fragmentation and loss of ecological connectivity. The integrity
              and survival of small, isolated stands is impaired by the small
              population size of many species, enhanced risks from environmental
              stochasticity, disruption to pollination and dispersal of fruits
              or seeds, and likely reductions in the genetic diversity of
              isolated populations (Lott 1990, Rossetto et al. 2004a, b).
              Disruption of these ecological processes may result in a large
              reduction in the ecological function of the community. <br />
              <br />
              The invasion and establishment of exotic species in Lowland
              Rainforest results in a large reduction in the ecological function
              of the community. ‘Invasion and establishment of exotic vines and
              scramblers’ is listed as a Key Threatening Process under the then
              NSW Threatened Species Conservation Act. <br />
              <br />
              Some stands of Lowland Rainforest are included within the
              conservation estate (including components of the Central Eastern
              Rainforest Reserves of Australia World Heritage listing). However,
              not all Lowland Rainforest suballiances occur in conservation
              reserves and many small stands, important for connectivity and
              maintenance of landscape-scale ecological processes, remain
              outside conservation reserves.
              <br />
              <br />
              Lowland Rainforest in the NSW North Coast and Sydney Basin
              Bioregions is eligible to be listed as an endangered ecological
              community as, in the opinion of the Scientific Committee, it is
              facing a very high risk of extinction in New South Wales in the
              near future, as determined in accordance with the criteria as
              prescribed by the Threatened Species Conservation Regulation 2002.
            </p>
            <ImgContainer>
              <Image
                src={NSWMap}
                alt="Map of Kalang headwaters showing forest types"
              />
            </ImgContainer>
            <Subtitle>
              THREATENED SPECIES VALUES AND THREATENED ECOLOGICAL COMMUNITIES
            </Subtitle>
            <p>
              Because they are connected to major latitudinal corridors along
              the Great Escarpment and the Great Dividing Range, the forests of
              the proposed reserve provide key habitat for part of what are
              likely to be amongst the largest populations of numerous wet
              forest dependent threatened species. Examples of such species
              include Stephens Banded Snake, Hoplocephalus stephensii, Sphagnum
              Frog, Philoria sphagnicolus, Golden-tipped Bat, Phoniscus
              papuensis, Red-legged Pademelon, Thylogale stigmatica and the
              Spotted-tailed Quoll, Dasyurus maculatus. The forests of the Upper
              Bellinger, Kalang and Nambucca Valleys are also a key stronghold
              for many other specialist wet fauna species including the
              Pale-yellow Robin, Southern Angle-headed Dragon and Spiny
              Crayfish, Euastacus sp.(spinifer) (McCormack unpub 2017). Other
              crayfish species known to occur in the Kalang River include Cherax
              cuspidatus (Riek, 1969) and E. dangadi (ACP Specimens 5902 – 5906)
              (McCormack unpub. 2017){" "}
            </p>
            <Subtitle>
              THREATENED SPECIES KNOWN FROM WITHIN THE PROPOSED RESERVE
            </Subtitle>
            <Table>
              <TRow>
                <th>FLORA</th>
                <th>latin</th>
                <th>Conservation Status</th>
              </TRow>
              <TRow>
                <td>Milky Silkpod</td>
                <td>Parsonsia dorrigoensis</td>
                <td>EPBC End. BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Slender Marsdenia</td>
                <td>Marsdenia longiloba</td>
                <td>EPBC & BCA End.</td>
              </TRow>
              <TRow>
                <td>Scrub Turpentine</td>
                <td>Rhodamnia rubescens</td>
                <td>BCA Crit. End.</td>
              </TRow>
              <TRow>
                <td>Rusty Plum</td>
                <td>Neimeyera whitei</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <th>FAUNA</th>
                <th></th>
                <th></th>
              </TRow>
              <TRow>
                <td>Bellinger River Snapping Turtle</td>
                <td>Myuchelys georgesii</td>
                <td>EPBC Crit. End. BCA Crit. End.</td>
              </TRow>
              <TRow>
                <td>Stephens Banded Snake</td>
                <td>Hoplocephalus stephensii</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <th>AMPHIBIANS</th>
                <th></th>
                <th></th>
              </TRow>
              <TRow>
                <td>Sphagnum Frog</td>
                <td>Philoria sphagnicolus</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Stuttering Frog</td>
                <td>Mixophyes balbus</td>
                <td>EPBC End. BCA End.</td>
              </TRow>
              <TRow>
                <td>Giant Barred Frog</td>
                <td>Mixophyes iteratus</td>
                <td>EPBC End. BCA End.</td>
              </TRow>
              <TRow>
                <th>BIRDS</th>
                <th></th>
                <th></th>
              </TRow>
              <TRow>
                <td>Rufous Scrub-bird </td>
                <td>Atrichornis rufescens</td>
                <td>EPBC End. BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Wompoo Fruit-dove </td>
                <td>Ptilinopus magnificus</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Rose-crowned Fruit-dove </td>
                <td>Ptilinopus regina</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Glossy Black Cockatoo </td>
                <td>Calyptorhynchus lathami</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Powerful Owl </td>
                <td>Ninox strenua</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Sooty Owl </td>
                <td>Tyto tenebricosa</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Varied Sittella </td>
                <td>Daphoenositta chrysoptera</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Little Lorikeet </td>
                <td>Glossopsitta pusilla</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Osprey </td>
                <td>Pandion cristatus (haliaetus)</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>White-bellied Sea Eagle </td>
                <td>Haliaeetus leucogaster</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Square-tailed Kite </td>
                <td>Lophoictinia isura</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <th>MAMMALS</th>
                <th></th>
                <th></th>
              </TRow>
              <TRow>
                <td>Koala </td>
                <td>Phascolarctos cinereus</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Long-nosed Potoroo </td>
                <td>Potorous tridactylus</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Spotted-tailed Quoll </td>
                <td>Dasyurus maculatus</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Common Planigale </td>
                <td>Planigale maculata</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Red-legged Pademelon </td>
                <td>Thylogale stigmatica</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Parma Wallaby </td>
                <td>Macropus parma</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Greater Glider </td>
                <td>Petauroides volans</td>
                <td>EPBC Vuln.</td>
              </TRow>
              <TRow>
                <td>Eastern Pygmy Possum </td>
                <td>Cercartetus nanus</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Brush-tailed Phascogale </td>
                <td>Phascogale tapoatafa</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Golden-tipped Bat </td>
                <td>Phoniscus papuensis</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Little Bent-wing Bat </td>
                <td>Miniopterus australis</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Greater Broad-nosed Bat </td>
                <td>Scoteanax rueppellii</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Grey-headed Flying-fox </td>
                <td>Pteropus poliocephalus</td>
                <td>BCA Vuln.</td>
              </TRow>
              <TRow>
                <td>Hastings River Mouse (suitable habitat present) </td>
                <td>Pseudomys oralis</td>
                <td>BCA End.</td>
              </TRow>
            </Table>
            <Subtitle>references</Subtitle>
            <p>
              Floyd A (1990a) Australian rainforests in New South Wales. Volume
              1. (Surrey Beatty and Sons: Sydney.)
              <br /><br/>
              Floyd A (1990b) Australian rainforests in New South Wales. Volume
              2. (Surrey Beatty and Sons: Sydney.)
              <br /><br/>
              Lott R (1990) Rainforest. Australian Heritage Commission,
              Canberra.
              <br /><br/>
              McCormack, R. (2017) unpub: Kalang River Survey Report 22 February
              2017
              <br /><br/>
              Rossetto M, Gross CL, Jones R, Hunter J (2004a) The impact of
              clonality on an endangered tree (Elaeocarpus williamsianus) in
              fragmented rainforest. Biological Conservation 117, 33-39.
              <br /><br/>
              Rossetto M, Jones R, Hunter J (2004b) Genetic effects of
              rainforest fragmentation in an early successional tree
              (Elaeocarpus grandis). Heredity 93, 610-619
              <br /><br/>
            </p>
          </Text>
        </TopBackgroundImage>
      </Parallax>
      <Footer />
    </Container>
  );
};

export default Kalang;
