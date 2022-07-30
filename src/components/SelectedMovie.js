import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';
import Footer from './Footer';

export default function SelectedMovie () {
    const [days, setDays]= useState([]);
    const [footerFilm, setFooterFilm]= useState({});
    const {idFilme} = useParams();

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);
        promise.then(response => {
        setDays(response.data.days)
        setFooterFilm(response.data)
    
    });
}, [])
    return (
        <>
         <div className='select'>
            <h3>Selecione o horário</h3>
        </div>
        <div className='container'>
        {
            days.map((day, index) =>
             <Sessions
             day = {day}
             key = {index}
             />   
             )}
        </div>
        <Footer>
            <div className = 'image-footer'>
            <img src = {footerFilm.posterURL} />
            </div>
            <h2>{footerFilm.title}</h2>
        </Footer>
        </>
    )
}

function Sessions ({day, key}) {
    
    


    return (
        <>   
        <div className='weekday-date'>
            <p>{day.weekday} - {day.date}</p>
        </div>
        <div className='showtimes'>
            {
                (day.showtimes).map( value =>
                    <Link to={`/assentos/${value.id}`}>
                    <div className='name'>
                    <p>{value.name}</p>
                    </div>
                    </Link>
                )
            }
        </div>     
        </>
    )
}
