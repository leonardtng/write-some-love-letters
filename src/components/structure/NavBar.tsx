import React, { useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Grid, Switch, Toolbar } from '@material-ui/core';
import {  Favorite, MailOutline, NightsStay, WbSunny } from '@material-ui/icons';
import { ThemeContext } from '../../contexts/ThemeContext';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiAppBar-root': {
      background: 'transparent',
      boxShadow: 'none',
    },
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      marginRight: 10,
    }
  },
  mode: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& .MuiSwitch-root': {
      marginRight: 10,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  '@media only screen and (max-width: 960px)': {
    root: {
      '& .MuiAppBar-root': {
        background: theme.palette.background.paper,
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
      },
    },
  },
}));

const NavBar: React.FC = () => {
  const classes = useStyles();

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={0}>
            <Grid item xs={9} className={classes.icons}>
              <Favorite color="primary" />
              <MailOutline color="primary" />
            </Grid>
            <Grid item xs={3} className={classes.mode}>
              <Switch
                checked={darkMode}
                onChange={toggleTheme}
                color="primary"
              />
              {darkMode ? (
                <NightsStay color="primary" />
              ) : (
                  <WbSunny color="primary" />
                )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
