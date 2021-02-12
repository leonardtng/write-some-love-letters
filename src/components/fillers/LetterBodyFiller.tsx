import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) => ({
  filler: {
    height: '100%',
    '& #gutterBottom': {
      marginBottom: '1em',
    },
  },
}));

const LetterBodyFiller: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.filler}>
      <Skeleton width="20%" animation="wave" id="gutterBottom" />
      <Skeleton width="100%" animation="wave" />
      <Skeleton width="100%" animation="wave" />
      <Skeleton width="100%" animation="wave" />
      <Skeleton width="100%" animation="wave" />
      <Skeleton width="100%" animation="wave" />
      <Skeleton width="100%" animation="wave" />
      <Skeleton width="100%" animation="wave" />
      <Skeleton width="100%" animation="wave" />
      <Skeleton width="100%" animation="wave" />
      <Skeleton width="100%" animation="wave" id="gutterBottom" />
      <Skeleton width="30%" animation="wave" />
      <Skeleton width="20%" animation="wave" />
    </div>
  );
}

export default LetterBodyFiller;