import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";
import breakpoints from "./breakpoints";
import { autoPlay } from "react-swipeable-views-utils";

import Slide01 from "../images/slide_1.jpg";
import Slide02 from "../images/slide_2.jpg";
import Slide03 from "../images/kalang-headwaters.png";
import Slide04 from "../images/slide_4.jpg";
import Slide05 from "../images/blueberry_farm.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const slides = [
  {
    label: "Bellingen Environment Centre",
    imgPath: Slide01,
    text: "Dedicated to the conservation of the natural environment since 1990. The BEC was formed in 1989 in response to the growing awareness that to deal with environmental issues, members of the community needed to work through an organisation to achieve the maximum benefit for the environment.",
  },
  {
    label: "The Great Koala National Park",
    imgPath: Slide02,
    text: "The proposed GKNP on paper covers an area from just north of Kempsey in the south to Woolgoolga in the north. It roughly runs west from the Pacific Highway to as far as a line aligned with the beginning of the Dorrigo Plateau in the east. ",
  },
  {
    label: "Friends of Kalang Headwater",
    imgPath: Slide03,
    text: "In November 2016, residents of the upper Kalang received notice from Forestry Corporation of NSW (FCNSW) of planned logging in compartments 138 to 144 in Oakes and Roses Creek state forests, these compartments are along Kelose Road, with the near pristine Roses Creek on one side and the upper Kalang River on the other side.",
  },
  {
    label: "Darruyay Yilaaming Gumbaynggida jagunda",
    imgPath: Slide04,
    text: "The BEC is currently working with the Gumbaynggirri people to protect songlines and heritage.",
  },
  {
    label: "The Blueberry Campaign",
    imgPath: Slide05,
    text: "The Bellingen Environment Centre started working on the Blueberry Campaign in 2015 when a local Valery resident notified them of their environmental concerns with a 150 acre blueberry farm on the edge of Pine Creek. The resident had exhausted every avenue to try and protect their local environment...",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90vw",
    flexGrow: 1,
    backgroundColor: "none",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5vh",
    marginBottom: "5vh",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    background: "rgba(255, 255, 255, 0.8)",
  },
  img: {
    display: "block",
    maxWidth: "95%",
    maxHeight: "55%",
    overflow: "hidden",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Root = styled.div`
  max-width: 90vw;
  flex-grow: 1;
  background-color: none;
  display: block;
  margin: auto;

  @media only screen and ${breakpoints.device.lg} {
    max-width: 70vw;
    margin-bottom: 5vh;
  }
`;

const Container = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(200, 200, 200, 0.9);
  max-height: 35vh;

  @media only screen and ${breakpoints.device.md} {
    max-height: 25vh;
  }
  @media only screen and ${breakpoints.device.lg} {
    max-height: 50vh;
    max-width: 70vw;
    justify-content: flex-end;
  }
`;

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = slides.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    // <div className={classes.root}>
    <Root>
      <Paper elevation={0} className={classes.header}>
        <Typography>{slides[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={7000}
        position="top"
      >
        {slides.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= slides.length + 1 ? (
              <Container>
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
                <p>{step.text}</p>
              </Container>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    {/* </div> */}
    </Root>
  );
}

export default SwipeableTextMobileStepper;
