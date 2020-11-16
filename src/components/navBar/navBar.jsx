import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {useStyles} from './style';
import Search from '../search/search';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function NavBar({ onSearch, showSearch }) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBg}>
        <Container maxWidth="lg">
          <Toolbar className={classes.space}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Link to='/' className={classes.title}>Marvel Searcher</Link >
            </IconButton>
            {showSearch && <Search onSearch={onSearch} />}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}