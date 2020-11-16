import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CardItem from './cardItem';

const useStyles = makeStyles({
    container: {
        marginTop: 16
    }
})

const CardList = ({ items }) => {

    const classes = useStyles();

    return (
        <Grid className={classes.container} container spacing={3}>
            {items?.map(comic => // Mapeia e imprime cada personagem presente na API (Num total de 20 por requisição)
            <CardItem values={comic} key={comic.id} />
            )}
        </Grid>
    )
}

export default CardList;
