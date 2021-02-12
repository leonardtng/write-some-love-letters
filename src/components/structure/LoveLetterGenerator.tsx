import React, { Fragment, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Grid, Paper, TextField, Tooltip, Typography } from '@material-ui/core';
import { ArrowForward, Edit, Refresh } from '@material-ui/icons';
import Female from '../../assets/female.svg';
import Male from '../../assets/male.svg';
import { generateLetter } from '../../@utils/generateLetter';
import { LoveLetter } from '../../@types';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
  },
  header: {
    marginTop: 30,
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
      marginTop: 20,
      color: theme.palette.action.disabled,
    },
  },
  toggleBody: {
    width: 700,
    textAlign: 'justify',
    marginBottom: 20,
  },
  letterContainer: {
    display: 'flex',
    justifyContent: 'center',
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
  filler: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
        height: 56,
        maxWidth: 700,
        width: '100%',
      },
      '& .MuiTypography-root': {
        marginTop: 20,
        color: theme.palette.action.disabled,
      },
    },
  },
}));

const LoveLetterGenrator: React.FC = () => {
  const classes = useStyles();

  const [recipient, setRecipient] = useState<string>('');
  const [sender, setSender] = useState<string>('');
  const [recipientGender, setRecipientGender] = useState<string | null>('female');

  const [letter, setLetter] = useState<LoveLetter>({
    generated: false,
    salutation: '',
    body: '',
    signOff: '',
    sender: ''
  });

  const handleRecipientGender = (event: React.MouseEvent<HTMLElement>, newRecipientGender: string | null) => {
    setRecipientGender(newRecipientGender);
    if (letter.generated) setLetter(generateLetter(recipient, sender, newRecipientGender));
  };


  const handleGenerateLetter = () => {
    setLetter(generateLetter(recipient, sender, recipientGender));
  }

  return (
    <Grid container spacing={6} className={classes.root}>
      <Grid item xs={12} className={classes.header}>
        <Typography variant="h2" component="h1" color="secondary" gutterBottom>
          Write some love letters
        </Typography>
        <Typography variant="h6" component="h2" color="secondary">
          Click the button to generate a love letter for your special someone! (Or yourself)
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.inputSection}>
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleGenerateLetter}
          endIcon={letter.generated ? <Refresh /> : <ArrowForward />}
        >
          {letter.generated ? 'Refresh!' : 'Generate!'}
        </Button>
        <Typography variant="subtitle1" component="div">* Recipient and sender names are optional</Typography>
      </Grid>
      <Grid item xs={12}>
        <ToggleButtonGroup
          className={classes.toggleBody}
          value={recipientGender}
          exclusive
          onChange={handleRecipientGender}
          aria-label="text alignment"
        >
          <Tooltip title="For Her" placement="top">
            <ToggleButton value="female">
              <img src={Female} alt="Female" height="20" />
            </ToggleButton>
          </Tooltip>
          <Tooltip title="For Him" placement="top">
            <ToggleButton value="male">
              <img src={Male} alt="Male" height="20" />
            </ToggleButton>
          </Tooltip>
        </ToggleButtonGroup>
        <div className={classes.letterContainer}>
          <Paper className={classes.letterBody}>
            {letter.generated ? (
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
                <div className={classes.filler}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleGenerateLetter}
                    endIcon={<Edit />}
                  >
                    Write a letter!
                  </Button>
                </div>
              )}
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}

export default LoveLetterGenrator;