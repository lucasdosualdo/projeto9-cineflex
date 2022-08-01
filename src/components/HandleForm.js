import {useNavigate} from 'react-router-dom';
import axios from 'axios';


export default function HandleForm (e, {ids, name, cpf}) {
    let navigate= useNavigate();
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