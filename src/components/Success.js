import {useNavigate} from 'react-router-dom';

export default function Success ({reserva}) {
    let navigate= useNavigate();
    return (
        <>
        <div className='select'>
            <h4>Pedido feito com sucesso!</h4>
        </div>
        <div className='info-success'>
            <div>
            <h5>Filme e sessão</h5>
        <p>{reserva.title}</p>
        <p>{`${reserva.date} ${reserva.time}`}</p>
            </div>
            <div>
            <h5>Ingressos</h5>
        {
            reserva.selectedSeats.map(seat=> (
                <p>Assento {seat}</p>
            ))
        }
            </div>
            <div>
            <h5>Comprador</h5>
        <p>{`Nome: ${reserva.name}`}</p>
        <p>{`CPF: ${reserva.cpf}`}</p>
            </div>
        
       <div className='centralizar'>
        <button onClick={()=>navigate('/')}>Voltar para Home</button>
       </div>
        </div>
        </>
    )
}