import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Link, Divider, Tooltip } from '@material-ui/core';
import { GitHub, Language } from '@material-ui/icons';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  footer: {
    width: '100%',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 50,
    '& a': {
      textDecoration: 'none',
      color: theme.palette.secondary.main
    },
  },
  iconBar: {
    display: 'flex',
    justifyContent: 'center',
    '& .MuiDivider-root': {
      height: 32,
      margin: '20px 15px 0 15px',
    },
  },
  contactLabel: {
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
          This project is inspired by Professor <Link href="https://www.yale-nus.edu.sg/about/faculty/olivier-danvy/" target="_blank" rel="noreferrer">Olivier Danvy's</Link> YSC1212 Introduction to Computer Science module and <Link href="http://www.alpha60.de/art/love_letters/" target="_blank" rel="noreferrer">Strachey's generator of love letters</Link>
        </Typography>
        <div className={classes.iconBar}>
          <Typography variant="h6" component="h3">
            <Tooltip title="View project on GitHub">
              <Link href="https://github.com/leonardtng/write-some-love-letters" color="textPrimary" target='_blank' rel="noopener" className={classes.contactLabel}>
                <GitHub />GitHub
              </Link>
            </Tooltip>
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="h6" component="h3">
            <Tooltip title="Visit my personal website!">
              <Link href="https://leonardtng.com" color="textPrimary" target='_blank' rel="noopener" className={classes.contactLabel}>
                <Language />My Website
              </Link>
            </Tooltip>
          </Typography>
        </div>
      </Grid>
    </Grid>
  )
}

export default Footer
