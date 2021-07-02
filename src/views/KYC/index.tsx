import React from 'react'
import Page from 'components/layout/Page'
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import StepConnector from '@material-ui/core/StepConnector';
import { Input, Text, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Typography from '@material-ui/core/Typography';
import Paso1 from './Paso1';
import Paso2 from './Paso2';
import Paso3 from './Paso3';
import Paso4 from './Paso4';
import Paso5 from './Paso5';

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

QontoStepIcon.defaultProps = {
  active: false,
  completed: false
}

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed, icon } = props;

  const icons = {
    1: <InfoIcon />,
    2: <PersonIcon />,
    3: <MonetizationOnIcon />,
    4: <AssignmentIcon />,
    5: <AssignmentTurnedInIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

ColorlibStepIcon.defaultProps = {
  active: false,
  completed: false,
  icon: null
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  Stepper: {
    backgroundColor: '#faf9fa'
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['one', 'two', 'three', 'four', 'five'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Paso1 />;
    case 1:
      return <Paso2 />;
    case 2:
      return <Paso3 />;
    case 3:
      return <Paso4 />;
    case 4:
      return <Paso5 />;
    default:
      return 'Unknown step';
  }
}

const KYC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Page>
      <div className={classes.root}>
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} className={classes.Stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{ }</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button scale="md" variant="danger" onClick={handleReset} className={classes.button}>
                {t('Reset')}
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button scale="md" variant="danger" disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  {t('Back')}
                </Button>
                <Button scale="md" variant="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? t('Finish') : t('Next')}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Page>
  );
}

export default KYC
