import React, { useEffect, useState } from 'react';
import marvelApi from '../../api/marvelApi';

import InfiniteScroll from 'react-infinite-scroll-component';
import useDebouncedEffect  from 'use-debounced-effect';

import CardList from '../../components/comicList';
import Search from '../../components/search/search';

import { Container } from '@material-ui/core';
import './style.css'
import NavBar from '../../components/navBar';

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState('');

    const pageSize = 20;

    const getCharacters = async () => { // Uma Função Assíncrona para acessar os personagens da API em forma de Lista
        setLoading(true);
        try {
            const data = await marvelApi.getCharacters(page * pageSize, search); 

            // console.log(data)
            setCharacters([...characters, ...data]);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    }

    const handleSearch = (e) => { // Função que permite buscar os personagens da API através do Nome
        setSearch(e.target.value);
        setCharacters([]); // Limpa a Lista inicial e se atualiza com os valores da busca
        setPage(0); //Após a busca ser limpa, retorna a lista no valor incial
    }

    const onLoad = () => {
        getCharacters();
    }

    useEffect(onLoad, [page]);

    useDebouncedEffect(onLoad, 500, [search]); // O Debounced é utilizado para que a função 'handleSearch' seja executada após o usuário ter terminado sua digitação

    return (
        <>
            <NavBar onSearch={handleSearch} showSearch />
            <Container maxWidth="lg">
                {/* <Search onSearch={handleSearch} /> */}
                <InfiniteScroll 
                dataLength={Math.ceil(characters.length / pageSize)}
                next={() => {
                    setPage(page + 1)
                }}
                hasMore={true}
                loader={<h4>Carregando...</h4>}
                endMessage={<p></p>}
                >
                    <CardList items={characters} />
                </InfiniteScroll>
            </Container>
        </>
    )
}

export default Home;
