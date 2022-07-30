import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

export default function Session () {
    const [seats, setSeats]=useState([]);
    const {idSessao} = useParams();

    useEffect(()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response =>{
            setSeats(response.data.seats);
        } )
    }, [])
    return (
        <>
        <div className='select'>
            <h3>Selecione o(s) assento(s)</h3>
        </div>
        <div className='seats'>
            {
                seats.map((seat, index) =>
                    <Seats
                    seat = {seat}
                    key={index}
                     />
                )
            }
        </div>
        </>
    )
}

function Seats({seat, key}) {
    return (
        <>
        <div className='seat'>
            {seat.name}
        </div>
        </>
    )
}