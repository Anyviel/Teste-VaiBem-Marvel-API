import React from 'react';
import Routes from '../Router';

import { Container, makeStyles } from '@material-ui/core';
import Home from '../pages/home';

const appStyles = makeStyles({
  container: {
    marginTop: 16
  }
})

function App() {
  const classes = appStyles();

  return (
    <div className="App">
      <Container maxWidth="md" className={classes.container}>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
