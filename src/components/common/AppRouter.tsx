import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../../pages/Main';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default,
      // color: theme.palette.text.primary,
    },
  }),
);

const AppRouter: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;