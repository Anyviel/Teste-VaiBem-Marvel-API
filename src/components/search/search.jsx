import React from 'react';

import { Divider, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const Search = ({ onSearch }) => {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search comics"
                inputProps={{ 'aria-label': 'search comics' }}
                onChange={onSearch}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default Search;
