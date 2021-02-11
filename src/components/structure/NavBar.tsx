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
