```jsx
// Importing required dependencies and components
import React from 'react';
import Sketchpad from '../components/Sketchpad';
import DoodleDisplay from '../components/DoodleDisplay';
import ErrorDisplay from '../components/ErrorDisplay';
import { makeStyles } from '@material-ui/core/styles';

// Setting up style rules for the Home component
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

// Main functional component for home page
export default function Home() {
  // Applying style rules
  const classes = useStyles();

  // Rendering the Home component that includes Sketchpad, DoodleDisplay, and ErrorDisplay 
  return (
    <div className={classes.root}>
      <Sketchpad /> {/* This section is for the Sketchpad component */}
      <DoodleDisplay /> {/* This section is for the DoodleDisplay component */}
      <ErrorDisplay /> {/* This section is for handling and displaying errors */}
    </div>
  );
}
```