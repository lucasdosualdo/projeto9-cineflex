import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from "./Header"
import InitialScreen from "./InitialScreen"
import SelectedMovie from "./SelectedMovie";
import Session from './Session';
import Success from './Success';

export default function App () {
    const [reserva, setReserva] = useState({});
    return (
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<InitialScreen />} />
            <Route path='/sessoes/:idFilme' element={<SelectedMovie />} />
            <Route 
            path='/assentos/:idSessao' 
            element = {<Session finish={reserva => setReserva(reserva)}/>} />
            <Route path='/sucesso' element = {<Success reserva={reserva}/>}/>
        </Routes>
        </BrowserRouter>
        </>
        
    )
}