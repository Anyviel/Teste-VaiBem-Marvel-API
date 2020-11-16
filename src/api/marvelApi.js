import dotenv from 'dotenv';
import md5 from 'md5';

dotenv.config(); // Permite a utilização das ENVS para armazenar dados sigilosos

const path = 'http://gateway.marvel.com/v1/public'; 

const getCredentials = () => {
    const publicKey = process.env.REACT_APP_MARVEL_KEY_PUBLIC; //Chamada a Chave Publica necessária para acessar a API da Marvel
    const privateKey = process.env.REACT_APP_MARVEL_KEY_PRIVATE; //Chamada a Chave Privada necessária para acessar a API da Marvel

    const ts = Date.now(); //Gera o Timestamp necessário para gerar a Hash
    const hash = md5(`${ts}${privateKey}${publicKey}`); //Gera a Hash utilizando o MD5

    return `apikey=${publicKey}&ts=${ts}&hash=${hash}`;
}

const marvelApi = {
    getCharacters: async (page = 0, name = '') => {
        let search = '';

        if (name !== ''){
            search = `&nameStartsWith=${name}`
        }

        const response = await fetch(`${path}/characters?${getCredentials()}&offset=${page}${search}`);
        const responseData = await response.json();

        return responseData?.data?.results;
    },
    getCharacter: async (id) => {
        const response = await fetch(`${path}/characters/${id}?${getCredentials()}`)
        const responseData = await response.json();

        return responseData?.data.results[0];
    }
}

export default marvelApi;
