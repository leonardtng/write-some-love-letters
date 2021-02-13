import React, { useLayoutEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { BeforeInstallPromptEvent } from '../@types';
import NavBar from '../components/structure/NavBar';
import LoveLetterGenerator from '../components/structure/LoveLetterGenerator';
import Footer from '../components/structure/Footer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    overflowX: 'hidden',
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
}));

const Main: React.FC = () => {
  const classes = useStyles();

  // Handle User Prompt Install PWA
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<BeforeInstallPromptEvent | null>(null);

  useLayoutEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler as any);

    return () => window.removeEventListener("transitionend", handler as any);
  }, []);

  const promptToInstall = () => {
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12}>
        <NavBar />
        <div className={classes.toolbar} />
      </Grid>
      <Grid item xs={1} lg={2} xl={3}></Grid>
      <Grid item xs={10} lg={8} xl={6}>
        <LoveLetterGenerator supportsPWA={supportsPWA} promptToInstall={promptToInstall} />
      </Grid>
      <Grid item xs={1} lg={2} xl={3}></Grid>
      <Grid item xs={1} lg={2} xl={3}></Grid>
      <Grid item xs={10} lg={8} xl={6}>
        <Footer />
      </Grid>
      <Grid item xs={1} lg={2} xl={3}></Grid>
    </Grid>
  );
}

export default Main;