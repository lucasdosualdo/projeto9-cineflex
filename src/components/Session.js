import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Form from './Form';
import Seats from './Seats';
import Footer from './Footer';

export default function Session () {
    const [seats, setSeats]=useState([]);
    const [footerName, setFooterName]=useState({});
    const [footerDate, setFooterDate]=useState({});
    const [footerImage, setFooterImage]=useState({});
    const [ids, setIds]=useState([]);
    console.log(ids, 'session')
    const {idSessao} = useParams();

    useEffect(()=> {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response =>{
            setSeats(response.data.seats);
            setFooterName(response.data);
            setFooterDate(response.data.day);
            setFooterImage(response.data.movie);
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
                    id={seat.id}
                    key={index}
                    ids={ids}
                    setIds={setIds}
                     />
                )
            }
        </div>
        <div className='example'>
            <div>
                <div className='seat selected'></div>
                <p>Selecionado</p>
            </div>
            <div>
                <div className='seat'></div>
                <p>Disponível</p>
            </div>
            <div>
                <div className='seat unavailable'></div>
                <p>Indisponível</p>
            </div>
        </div>
        <Form ids = {ids}/>
        <Footer>
        <div className = 'image-footer'>
            <img src = {footerImage.posterURL} />
            </div>
            <div>
            <h2>{footerImage.title}</h2>
            <h2>{footerDate.weekday} - {footerName.name}</h2>
            </div> 
        </Footer>
        </>
    )
}

