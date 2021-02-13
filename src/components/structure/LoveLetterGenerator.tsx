import React, { Fragment, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Grid, Hidden, IconButton, Paper, TextField, Tooltip, Typography } from '@material-ui/core';
import { ArrowForward, FileCopy, Refresh } from '@material-ui/icons';
import { HashLink as Link } from 'react-router-hash-link';
import Female from '../../assets/female.svg';
import Male from '../../assets/male.svg';
import { generateLetter } from '../../@utils/generateLetter';
import { LoveLetter } from '../../@types';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import LetterBodyFiller from '../fillers/LetterBodyFiller';
import ResponseSnackbar from '../ulilities/ResponseSnackbar';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    overflow: 'hidden',
  },
  header: {
    marginTop: 20,
  },
  inputSection: {
    '& .MuiTextField-root': {
      width: 250,
      marginRight: 20,
    },
    '& .MuiButton-root': {
      height: 56,
      width: 160,
    },
    '& .MuiTypography-root': {
      marginBottom: 20,
      color: theme.palette.action.disabled,
    },
    '& a': {
      textDecoration: 'none',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  toggleBody: {
    width: 656, // 700 - 44 width - icon width
    textAlign: 'justify',
    marginBottom: 20,
  },
  copyButton: {
    height: 44,
    width: 44
  },
  letterBody: {
    minHeight: 300,
    width: 700,
    textAlign: 'justify',
    padding: 30,
    '& .MuiTypography-gutterBottom': {
      marginBottom: '1em',
    }
  },
  buttonAnimation: {
    animation: '$pulse 1.5s ease infinite',
    boxShadow: `0 0 0 0 ${theme.palette.primary.main}80`,
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(0.9)',
    },
    '70%': {
      transform: 'scale(1)',
      boxShadow: `0 0 0 15px ${theme.palette.primary.main}00`,
    },
    '100%': {
      transform: 'scale(0.9)',
      boxShadow: `0 0 0 0 ${theme.palette.primary.main}00`
    }
  },
  '@media only screen and (max-width: 960px)': {
    inputSection: {
      '& .MuiTextField-root': {
        maxWidth: 700,
        width: '100%',
        marginBottom: 30,
        marginRight: 0,
      },
      '& .MuiButton-root': {
        maxWidth: 700,
        width: '100%',
      },
    },
  },
}));

const LoveLetterGenerator: React.FC = () => {
  const classes = useStyles();

  const [recipient, setRecipient] = useState<string>('');
  const [sender, setSender] = useState<string>('');
  const [recipientGender, setRecipientGender] = useState<string | null>('female');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [letter, setLetter] = useState<LoveLetter>({
    generated: false,
    salutation: '',
    body: '',
    signOff: '',
    sender: ''
  });

  const handleRecipientGender = (event: React.MouseEvent<HTMLElement>, newRecipientGender: string | null): void => {
    setRecipientGender(newRecipientGender);
    if (letter.generated) {
      setIsLoading(true);
      setTimeout(() => {
        setLetter(generateLetter(recipient, sender, newRecipientGender));
        setIsLoading(false);
      }, 500);
    };
  };

  const handleGenerateLetter = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      setLetter(generateLetter(recipient, sender, recipientGender));
      setIsLoading(false);
    }, 500);
  };

  const [message, setMessage] = useState<string>('');

  const handleCopyLetter = (): void => {
    try {
      var letterBody: HTMLTextAreaElement = document.createElement('textarea');
      letterBody.value = `${letter.salutation}\n\n${letter.body}\n\n${letter.signOff}\n${letter.sender}`;
      document.body.appendChild(letterBody);
      letterBody.select();
      letterBody.setSelectionRange(0, 99999); /* For mobile devices */
      document.execCommand('copy');
      letterBody.remove();
      setMessage('Letter successfully copied!');
    } catch (error) {
      setMessage((error as Error).message);
    }
  };

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={12} className={classes.header}>
        <Hidden xsDown>
          <Typography variant="h2" component="h1" color="secondary" gutterBottom>
            Write some love letters!
        </Typography>
          <Typography variant="h6" component="h2" color="secondary">
            Click the button to generate a love letter for your special someone! (Or yourself)
        </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="h3" component="h1" color="secondary" gutterBottom>
            Write some love letters!
        </Typography>
          <Typography variant="subtitle1" component="h2" color="secondary">
            Click the button to generate a love letter for your special someone! (Or yourself)
          </Typography>
        </Hidden>
      </Grid>
      <Grid item xs={12} className={classes.inputSection}>
        <Typography variant="subtitle1" component="div">* Recipient and sender names are optional</Typography>
        <TextField
          id="recipient"
          label="Who is this for?"
          variant="outlined"
          onChange={(e) => {
            setRecipient(e.target.value)
            e.persist();
          }}
        />
        <TextField
          id="sender"
          label="Who is this from?"
          variant="outlined"
          onChange={(e) => {
            setSender(e.target.value)
            e.persist();
          }}
        />
        <span id="letter-anchor" />
        <Link smooth to="#letter-anchor">
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateLetter}
            endIcon={letter.generated ? <Refresh /> : <ArrowForward />}
            className={letter.generated ? undefined : classes.buttonAnimation}
          >
            {letter.generated ? 'Refresh!' : 'Generate!'}
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.container}>
          <ToggleButtonGroup
            className={classes.toggleBody}
            value={recipientGender}
            exclusive
            onChange={handleRecipientGender}
          >
            <ToggleButton value="female">
              <Tooltip title="For Her" placement="top">
                <img src={Female} alt="Female" height="20" />
              </Tooltip>
            </ToggleButton>
            <ToggleButton value="male">
              <Tooltip title="For Him" placement="top">
                <img src={Male} alt="Male" height="20" />
              </Tooltip>
            </ToggleButton>
          </ToggleButtonGroup>
          <IconButton onClick={handleCopyLetter} className={classes.copyButton} disabled={!letter.generated}>
            <Tooltip title="Copy to Clipboard" placement="top">
              <FileCopy />
            </Tooltip>
          </IconButton>
        </div>
        <div className={classes.container}>
          <Paper className={classes.letterBody}>
            {letter.generated && !isLoading ? (
              <Fragment>
                <Typography variant="h6" component="p" color="primary" gutterBottom>
                  {letter.salutation}
                </Typography>
                <Typography variant="h6" component="p" color="primary" gutterBottom>
                  {letter.body}
                </Typography>
                <Typography variant="h6" component="p" color="primary">
                  {letter.signOff}
                </Typography>
                <Typography variant="h6" component="p" color="primary">
                  {letter.sender}
                </Typography>
              </Fragment>
            ) : (
                <LetterBodyFiller />
              )}
          </Paper>
        </div>
      </Grid>
      <ResponseSnackbar message={message} setMessage={setMessage} severity='success' />
    </Grid>
  );
}

export default LoveLetterGenerator;