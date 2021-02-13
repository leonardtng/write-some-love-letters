import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Snackbar, Zoom } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions/transition';

const useStyles = makeStyles((theme: Theme) => ({
  snackbar: {
    '& .MuiAlert-filledSuccess': {
      // backgroundColor: theme.palette.primary.main // Enable to change snackbar color
    }
  },
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Zoom ref={ref} {...props} />;
});

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

interface ResponseSnackbarProps {
  message: string;
  severity: 'success' | 'info' | 'error';
  setMessage: React.Dispatch<React.SetStateAction<string>>
}

const ResponseSnackbar: React.FC<ResponseSnackbarProps> = ({ message, severity, setMessage }: ResponseSnackbarProps) => {
  const classes = useStyles();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={!!message}
      TransitionComponent={Transition}
      autoHideDuration={6000}
      onClose={() => setMessage('')}
      className={classes.snackbar}
    >
      <Alert severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default ResponseSnackbar