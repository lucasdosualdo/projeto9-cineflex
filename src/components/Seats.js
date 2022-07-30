import { useState } from 'react';

export default function Seats({seat, available, id, key}) {

    if (available) {
        return (
            <SelectSeats
            seat = {seat}
            id={id}
            />
        )
    } else {
        return (
            <div className='seat unavailable'>
                {seat}
            </div> 
        )
    }
    
}

function SelectSeats ({seat, id}) {
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