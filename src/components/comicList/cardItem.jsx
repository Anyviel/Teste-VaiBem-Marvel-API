import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { useStyles } from './style';

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
                    <CardContent className={classes.cardBg}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                            {values?.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardBtnBg}>
                    <Button size="small" color="secondary" className={classes.cardBtn} onClick={handleClick}>
                        Saiba mais
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CardItem;
