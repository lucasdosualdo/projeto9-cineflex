import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

export default function SelectedMovie () {
    const [days, setDays]= useState([]);
    const [session, setSession]= useState({});
    const {idFilme} = useParams();
const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
promise.then(response => {
setDays(response.data.days)
setSession(response.data)
})
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
        <Footer
        session = {session}/>
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
                    <div className='name'>
                    <p>{value.name}</p>
                    </div>
                )
            }
        </div>     
        </>
    )
}

function Footer ({session}) {
    return (
<div className = 'footer'>
    <div className = 'image-footer'>
    <img src = {session.posterURL} />
    </div>
    <h2>{session.title}</h2>
</div>
    )
    
}