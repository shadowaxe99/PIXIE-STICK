import React from 'react';
import Sketchpad from '../components/Sketchpad';
import DoodleDisplay from '../components/DoodleDisplay';
import ErrorDisplay from '../components/ErrorDisplay';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sketchpad />
      <DoodleDisplay />
      <ErrorDisplay />
    </div>
  );
}