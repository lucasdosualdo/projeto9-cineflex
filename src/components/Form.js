import { useState } from 'react';

export default function Form () {
const [name, setName]=useState('');
const [cpf, setCpf]=useState('');

    function handleForm (e) {
        e.preventDefault();

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