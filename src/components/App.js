import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header"
import InitialScreen from "./InitialScreen"
import SelectedMovie from "./SelectedMovie";
import Session from './Session';

export default function App () {
    return (
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<InitialScreen />} />
            <Route path='/sessoes/:idFilme' element={<SelectedMovie />} />
            <Route path='/assentos/:idSessao' element = {<Session/>} />
        </Routes>
        </BrowserRouter>
        </>
        
    )
}