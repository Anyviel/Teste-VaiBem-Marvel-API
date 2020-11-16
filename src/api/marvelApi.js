import dotenv from 'dotenv';
import md5 from 'md5';


dotenv.config();

const path = 'http://gateway.marvel.com/v1/public';

const getCredentials = () => {
    const publicKey = process.env.REACT_APP_MARVEL_KEY_PUBLIC;
    const privateKey = process.env.REACT_APP_MARVEL_KEY_PRIVATE;

    const ts = Date.now();
    const hash = md5(`${ts}${privateKey}${publicKey}`);

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
