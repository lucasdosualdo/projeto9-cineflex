import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


export default function Form ({ids, title, date, time, selectedSeats, finish}) {
const [name, setName]=useState('');
const [cpf, setCpf]=useState('');
let navigate= useNavigate();

function handleForm (e) {
    e.preventDefault();
    let newCpf  = cpf.replace(/\.|-/g,"");
    newCpf = newCpf.split("").map((e) => parseInt(e));
    console.log(newCpf);
    
    function ValidarPrimeiroDigito() {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += newCpf[i] * (10 - i);
    }
    const resto = (sum * 10) % 11;
    if (resto < 10) {
        return newCpf[9] == resto;
    }
    return newCpf[9] == 0;
    }
    
    function ValidarSegundoDigito() {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += newCpf[i] * (11 - i);
    }
    const resto = (sum * 10) % 11;
    if (resto < 10) {
        return newCpf[10] == resto;
    }
    return newCpf[10] == 0;
    }
    
    function ValidarRepetido() {
        const primeiro = newCpf[0];
        let diferente = false;
        for(let i = 1; i < newCpf.length; i++) {
            if(newCpf[i] != primeiro) {
                diferente = true;
            }
        }
        return diferente;
    }
    
    if (ids.length===0) {
        alert('Selecione ao menos um assento.');
        return false; 
    }
    
    if (newCpf.length != 11) {
        alert('Digite um CPF verdadeiro e corretamente.');
        return false;
    }
    if(!ValidarRepetido(newCpf)) {
        alert('Digite um CPF verdadeiro e corretamente.');
        return false;
    }
    if (!ValidarPrimeiroDigito(newCpf)) {
        alert('Digite um CPF verdadeiro e corretamente.');
        return false;
    }
    if (!ValidarSegundoDigito(newCpf)) {
        alert('Digite um CPF verdadeiro e corretamente.');
        return false;
    }
            
    const body = {
        ids,
        name,
        cpf
    }
    const request = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', body);
    request.then(response => {
        finish({
            ids: ids,
            title: title,
            date: date,
            time: time,
            selectedSeats: selectedSeats,
            name: name,
            cpf: cpf
        })
        navigate('/sucesso')
    });
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
                {console.log(cpf, typeof(cpf))}
                <button>
                    <p>Reservar assento(s)</p>
                </button>
            </div>
        </form>    
    )
}

