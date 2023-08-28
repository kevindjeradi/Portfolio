import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import mobileImg from '../images/mobile.png';
import javaImg from '../images/java.jpg';
import reactImg from '../images/react.jpg';
import flutterImg from '../images/flutter.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Exemple de projet 1 - Flutter / Laravel',
    imgPath:
      mobileImg,
  },
  {
    label: 'Exemple de projet 2 - Java',
    imgPath:
      javaImg,
  },
  {
    label: 'Exemple de projet 3 - React / NodeJs',
    imgPath:
      reactImg,
  },
  {
    label: 'Exemple de projet 4 - Flutter / Dart',
    imgPath:
      flutterImg,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <Box sx={{ maxWidth: '75%', flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'transparent',
        }}
      >
        <Typography sx={{ color: 'white', flexGrow: 1, textAlign: 'center' }}>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
    <Box
        key={step.label}
        sx={{
            display: 'flex',
            alignItems: 'center', // This centers items vertically in the container
            justifyContent: 'center', // This centers items horizontally, if needed
            height: '100%', // Take full height of the parent
        }}
    >
        {Math.abs(activeStep - index) <= 2 ? (
            <Box
                component="img"
                sx={{
                    height: 'auto',
                    maxWidth: '100%',
                    width: '100%',
                    objectFit: 'contain', // To ensure image does not stretch or get cropped
                }}
                src={step.imgPath}
                alt={step.label}
            />
        ) : null}
    </Box>
))}

      </AutoPlaySwipeableViews>
      <MobileStepper
  steps={maxSteps}
  position="static"
  activeStep={activeStep}
  nextButton={
    <Button
      size="small"
      onClick={handleNext}
      disabled={activeStep === maxSteps - 1}
      sx={{ color: 'white' }}
    >
      {theme.direction === 'rtl' ? (
        <KeyboardArrowLeft />
      ) : (
        <KeyboardArrowRight />
      )}
    </Button>
  }
  backButton={
    <Button
      size="small"
      onClick={handleBack}
      disabled={activeStep === 0}
      sx={{ color: 'white' }}
    >
      {theme.direction === 'rtl' ? (
        <KeyboardArrowRight />
      ) : (
        <KeyboardArrowLeft />
      )}
    </Button>
  }
  sx={{
    backgroundColor: 'transparent',
    '& .MuiMobileStepper-dots': {
      '& .MuiMobileStepper-dot': {
        backgroundColor: 'grey',
      },
      '& .MuiMobileStepper-dotActive': {
        backgroundColor: 'white',
      },
    },
  }}
/>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
