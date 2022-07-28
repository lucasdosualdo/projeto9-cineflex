import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Movies () {

    const [movies, setMovies] = useState([]);
    useEffect (()=> {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promise.then((response) => {
            setMovies(response.data)
        })
    }, [])
    return (
        <div className = 'movies'>
        {movies.map((movie, index)=> 
        <Movie
        key = {index}
        movie = {movie}
        />)}
    </div>
    )
}


function Movie ({movie, key}) {
    return (
        <>
        <div className = 'movie'>
            <img src = {movie.posterURL}/>
        </div>
        </>
    )
}