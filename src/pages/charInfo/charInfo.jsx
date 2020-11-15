import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import marvelApi from '../../api/marvelApi';

function CharInfo() {

  const { id } = useParams();

  const [character, setCharacter] = useState([]);
  // const [comic, setComic] = useState([]);

  const getChar = async () => {
    try {
      const data = await marvelApi.getCharacter(id);

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  const onLoad = () => {
    getChar();
  }

  useEffect(onLoad, [])

  return (
    <h2>Sou uma Página Secundário</h2>
  )
}

export default CharInfo;