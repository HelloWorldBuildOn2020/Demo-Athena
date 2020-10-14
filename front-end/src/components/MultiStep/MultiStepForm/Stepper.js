import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Stepper,
  Step,
  StepButton,
  Button,
  Box
} from "@material-ui/core";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import color from "../../../Config/Color";
import apiServices from "../../../services/apiVerifySlip";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: color.primary
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Purchase and delivery details", "Payment", "Wait for status confirmation"];
}

export default function HorizontalNonLinearAlternativeLabelStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false)
  const [response,  setResponse] = useState({})
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleFinish = () => {
    setLoading(true)
    setActiveStep(2)
  };

  const handleSubmit = async (slip, data) => {
    handleFinish();
    try {
      await apiServices.verifySlip(slip, data).then((data) => {
        console.log(data)
        setResponse(data)
        setLoading(false);
      })
    } catch (error) {
      setResponse(error.response)
      setLoading(false);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return (
          <StepTwo
            handleFinish={handleFinish}
            setLoading={() => setLoading(loading)}
            handleSubmit={handleSubmit}
          />
        );
      case 2:
        return <StepThree loading={loading} statusCode={response.status}/>;
      default:
        return "Unknown step";
    }
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepButton onClick={handleStep(index)} {...buttonProps}>
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length - 2 ? (
          <>
            <div className={classes.instructions}>
              {getStepContent(activeStep)}
            </div>
          </>
        ) : (
          <>
            {activeStep === 2 ? (
              <div className={classes.instructions}>
                {getStepContent(activeStep)}
              </div>
            ) : (
              <>
                <div className={classes.instructions}>
                  {getStepContent(activeStep)}
                </div>
                <Box display="flex" flexDirection="row-reverse">
                  <Box alignItems="flex-end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
