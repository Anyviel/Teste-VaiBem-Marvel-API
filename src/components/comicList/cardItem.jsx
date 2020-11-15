import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import './style.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 260,
    },
});


const CardItem = ({ values }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`${values?.thumbnail?.path}.${values?.thumbnail?.extension}`}
                        title={values?.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {values?.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {values?.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="secondary" className="btn-red">
                        Saiba mais
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CardItem;
