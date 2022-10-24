import * as React from 'react';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import Grow, { GrowProps } from '@mui/material/Grow';
import Slide, { SlideProps } from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import { TransitionProps } from '@mui/material/transitions';
import { useAlertContext } from './AlertContext';

const AUTO_HIDE_DURATION = 3000;

const SlideTransition = (props: SlideProps) => <Slide {...props} direction="up" />;

export function SnackbarAlert() {
  // const [open,setOpen]=useState(false)
  const {
    alert: { open, message, severity },
    closeAlert,
  } = useAlertContext();
  console.log('❗alert', alert);

  return (
    <div>
      {/*<Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>*/}
      {/*<Button onClick={handleClick(Fade)}>Fade Transition</Button>*/}
      {/*<Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>*/}
      <Snackbar
        open={open}
        TransitionComponent={SlideTransition}
        autoHideDuration={AUTO_HIDE_DURATION}
        onClose={() => closeAlert()}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </div>
  );
}
