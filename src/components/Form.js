import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Form ({ids}) {
const [name, setName]=useState('');
const [cpf, setCpf]=useState('');
let navigate= useNavigate();

    function handleForm (e) {
        e.preventDefault();
        const body = {
            ids,
            name,
            cpf
        }

        const request = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', body);

        request.then(
            navigate('/')
        )
    }
    return (
        
            <form onSubmit ={handleForm}>
                <div className='form'>
            <p>Nome do comprador:</p>
        <input 
        type = 'text' 
        placeholder="Digite seu nome..."
        onChange={(e)=>setName(e.target.value)}
        value={name}
        required
        />
        <p>CPF do comprador:</p>
        <input 
        type = 'text' 
        placeholder="Digite deu CPF..."
        onChange={(e)=>setCpf(e.target.value)}
        value={cpf}
        required
        />
        <button>
            <p>Reservar assento(s)</p>
        </button>
        </div>
        </form>    
    )
}