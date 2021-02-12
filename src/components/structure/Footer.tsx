import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Link } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

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
    },
  },
  github: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    '& .MuiSvgIcon-root': {
      marginRight: 8,
    },
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.footer}>
      <Grid item xs={12}>
        <Typography variant="body1" component="p">
          This project is inspired by Professor <Link href="https://www.yale-nus.edu.sg/about/faculty/olivier-danvy/" target="_blank" rel="noreferrer">Olivier Danvy's</Link> YSC1212 Introduction to Computer Science module and <Link href="http://www.alpha60.de/art/love_letters/" target="_blank" rel="noreferrer">Starchy's Love Letter Generator</Link>
        </Typography>
        <Typography variant="h6" component="h3">
          <Link href="https://github.com/leonardtng/write-some-love-letters" color="textPrimary" target='_blank' rel="noopener" className={classes.github}>
            <GitHub />GitHub
          </Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
