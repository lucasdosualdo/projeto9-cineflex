import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header"
import InitialScreen from "./InitialScreen"
import SelectedMovie from "./SelectedMovie";
export default function App () {
    return (
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<InitialScreen />} />
            <Route path='/sessoes/:idFilme' element={<SelectedMovie />} />
        </Routes>
        </BrowserRouter>
        </>
        
    )
}