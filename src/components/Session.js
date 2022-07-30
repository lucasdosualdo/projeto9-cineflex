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
                    seat = {seat.name}
                    available= {seat.isAvailable}
                    key={index}
                     />
                )
            }
        </div>
        </>
    )
}

function Seats({seat, available, key}) {

    if (available) {
        return (
            <SelectSeats
            seat = {seat}
            />
        )
    } else {
        return (
            <>
            <div className='unavailable'>
                {seat}
            </div>
            </>
        )
    }
    
}

function SelectSeats ({seat}) {
    const [select, setSelect]=useState(false);
    return (
        <>
          {
            !select ?
            (<div className='seat' onClick={()=>setSelect(!select)}>
            {seat}
        </div>) :
        (<div className='seat selected' onClick={()=>setSelect(!select)}>
        {seat}
    </div>)
        }
        </>     
    )
}