import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
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
        <Home />
      </Container>
    </div>
  );
}

export default App;
