import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

import './style.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 340,
    },
    media: {
        height: 260,
    },
});


const CardItem = ({ values }) => {
    const classes = useStyles();

    let history = useHistory();

    function handleClick() { // Captura o ID do personagem selecionado dentro da Home e manda para a '/char-info'
        history.push(`/char-info/${values.id}`); 
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} >

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`${values?.thumbnail?.path}.${values?.thumbnail?.extension}`}
                        title={values?.name}
                        onClick={handleClick}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {values?.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="secondary" className="btn-red" onClick={handleClick}>
                        Saiba mais
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CardItem;
