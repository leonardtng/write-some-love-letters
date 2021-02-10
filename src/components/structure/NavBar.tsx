import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar } from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiAppBar-root': {
      background: 'transparent',
      boxShadow: 'none',
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={0}>
            <Grid item xs={1}>
              Icon
            </Grid>
            <Grid item xs={11}>

            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
