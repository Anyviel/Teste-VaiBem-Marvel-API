import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import marvelApi from '../../api/marvelApi';

import NavBar from '../../components/navBar';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from './style';

function Character() {

  const { id } = useParams(); //Função do React-Router-Dom para garantir a identificação de cada personagem

  const classes = useStyles();

  const [character, setCharacter] = useState([]);

  const getChar = async () => { // Uma Função Assíncrona para acessar os personagens da API de forma individual
    try {
      const data = await marvelApi.getCharacter(id);
      // console.log(data);

      setCharacter(data);
    } 
    catch (err) {
      console.error(err); //Em caso de algum erro durante o carregamento das informações da API
    }
  }

  const onLoad = () => { //Inicia a Função no momento que os dados são carregados.
    getChar();
  }

  useEffect(onLoad, [])

  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Paper elevation={3} className={classes.paper}>
            <Grid container>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={classes.heroBg}>
                <img className={classes.heroImg} src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}/>
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={9} xl={9}>
                <Grid container style={{margin:0}} spacing={1}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.heroInf}>
                    <Typography className={classes.heroName}>
                      <b>Nome: </b>{character?.name}
                    </Typography>
                    <Typography className={classes.heroDsc}>
                      <b>Descrição: </b>
                      {character?.description ? character?.description : 'Descrição não disponível.'}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    </>
  )
}

export default Character;