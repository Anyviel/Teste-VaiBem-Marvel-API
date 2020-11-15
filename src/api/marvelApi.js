import dotenv from 'dotenv';
import md5 from 'md5';


dotenv.config();

const path = 'http://gateway.marvel.com/v1/public/';

const getCredentials = () => {
    const publicKey = process.env.REACT_APP_MARVEL_KEY_PUBLIC;
    const privateKey = process.env.REACT_APP_MARVEL_KEY_PRIVATE;

    const ts = Date.now();
    const hash = md5(`${ts}${privateKey}${publicKey}`);

    return `apikey=${publicKey}&ts=${ts}&hash=${hash}`;
}

const marvelApi = {
    getComics: async (page = 0) => {
        const response = await fetch(`${path}/characters?${getCredentials()}&offset=${page}`);
        const responseData = await response.json();

        return responseData?.data?.results;
    }
}

export default marvelApi;
