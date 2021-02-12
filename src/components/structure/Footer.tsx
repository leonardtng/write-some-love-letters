import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  footer: {
    height: 50,
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 50,
    position: 'relative',
    '& a': {
      textDecoration: 'none',
      color: theme.palette.secondary.main
    }
  }
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.footer}>
      <Grid item xs={12}>
        <Typography>
          This project is inspired by Professor 
          <a href="https://www.yale-nus.edu.sg/about/faculty/olivier-danvy/" target="_blank" rel="noreferrer"> Olivier Danvy's </a> 
          YSC1212 Introduction to Computer Science Module and 
          <a href="http://www.alpha60.de/art/love_letters/" target="_blank" rel="noreferrer"> Starchy's Love Letter Generator</a>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
