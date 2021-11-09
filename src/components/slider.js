import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import Slide01 from "../images/slide_1.jpg";
import Slide02 from "../images/slide_2.jpg";
import Slide03 from "../images/slider_3.png";
import Slide04 from "../images/slide_4.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const slides = [
  {
    label: "Bellingen Environment Centre",
    imgPath: Slide01,
  },
  {
    label: "The Great Koala National Park",
    imgPath: Slide02,
  },
  {
    label: "Kalang Headwaters",
    imgPath: Slide03,
  },
  {
    label: "Bellingen River Turtles",
    imgPath: Slide04,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "60vw",
    flexGrow: 1,
    backgroundColor: "none",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
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
    overflow: "hidden",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

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
    <div className={classes.root}>
      <Paper elevation={0} className={classes.header}>
        <Typography>{slides[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={7000}
        position= 'top'
      >
        {slides.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 5 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
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
    </div>
  );
}

export default SwipeableTextMobileStepper;
