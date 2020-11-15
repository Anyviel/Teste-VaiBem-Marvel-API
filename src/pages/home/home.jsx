import React, { useEffect, useState } from 'react';
import marvelApi from '../../api/marvelApi';

import InfiniteScroll from 'react-infinite-scroll-component';
import useDebouncedEffect  from 'use-debounced-effect';

import CardList from '../../components/comicList';
import Search from '../../components/search/search';
import './style.css'

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [comics, setComics] = useState([]);
    const [search, setSearch] = useState('');


    const getComics = async () => {
        setLoading(true);
        try {
            const data = await marvelApi.getComics(page * 20, search);

            console.log(data)
            setComics([...comics, ...data]);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setComics([]);
        setPage(0);
    }

    const onLoad = () => {
        getComics();
    }

    useEffect(onLoad, [page]);

    useDebouncedEffect(onLoad, 500, [search]);

    return (
        <>
            <Search onSearch={handleSearch} />
            <InfiniteScroll 
            dataLength={comics.length}
            next={() => {
                setPage(page + 1)
            }}
            hasMore={true}
            loader={<h4>Carregando...</h4>}
            >
                <CardList items={comics} />
            </InfiniteScroll>
        </>
    )
}

export default Home;
