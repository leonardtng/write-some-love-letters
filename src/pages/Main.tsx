import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import NavBar from '../components/structure/NavBar';

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
        <Typography variant="h1" component="h1">Write me a love letter</Typography>
      </Grid>
      <Grid item xs={1} lg={2} xl={3}></Grid>
    </Grid>
  );
}

export default Main;