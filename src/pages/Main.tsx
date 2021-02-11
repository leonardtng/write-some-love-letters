import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import NavBar from '../components/structure/NavBar';
import LoveLetterGenerator from '../components/structure/LoveLetterGenerator';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    overflowX: 'hidden',
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
}));

const Main: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12}>
        <NavBar />
        <div className={classes.toolbar} />
      </Grid>
      <Grid item xs={1} lg={2} xl={3}></Grid>
      <Grid item xs={10} lg={8} xl={6}>
        <LoveLetterGenerator />
      </Grid>
      <Grid item xs={1} lg={2} xl={3}></Grid>
    </Grid>
  );
}

export default Main;