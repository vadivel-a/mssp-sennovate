import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Paper,Grid } from '@material-ui/core';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import {MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
import IntegrationRequirements from './IntegrationRequirements';
import OtherIntegrationRequirements from './OtherIntegrationRequirements';
import VendorSolutions from './VendorSolutions';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepnav:{
    maxWidth:'1000px',
    margin:"0 auto"
  }
}));

function getSteps() {
  return ['Integration Requirements',
  'Other Integration Requirements',
  'View Available Vendor Solutions/Products'];
}


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#62E509',
      contrastText: '#fff'
    }
  }
});
export default function Index(data) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <IntegrationRequirements />;
      case 1:
        return <OtherIntegrationRequirements />;
      case 2:
        return <VendorSolutions data={data} />;
      default:
        return 'Unknown stepIndex';
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const breadcrumbList = [
    {title:"Home", to:"/"},
    {title:"Products", to:"/"},
    {title:"Workforce Identity", to:'current'}
  ];
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Toolbar />
        <Breadcrumbs currentTitle={'Workforce Identity'} pageTitle={'Sennovate MSSP Solution Builder'} breadcrumbList={breadcrumbList} />

        <MuiThemeProvider theme={theme}>
        <Paper className={classes.paper} >

        <Stepper activeStep={activeStep} className={classes.stepnav}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

            <div>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>All steps completed</Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
            <div>
                  <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                  <div align="right">
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                      >
                        Back
                      </Button>
                      <Button variant="contained" color="primary" onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
        </Paper>
      </MuiThemeProvider>


      </main>
    </div>
  );
}
