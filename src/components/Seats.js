import { useState } from 'react';

export default function Seats({seat, available, id, key}) {
    const [ids, setIds]=useState([]);
    if (available) {
        return (
            <SelectSeats
            seat = {seat}
            id={id}
            ids={ids}
            setIds={setIds}
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

function SelectSeats ({seat, id, ids, setIds}) {
    const [select, setSelect]=useState(false);
    console.log(ids, 'seats')
function teste () {
    setSelect(!select)
    setIds(ids.push(id))
console.log(ids, 'teste')
}
    return (
        <>
          {
            !select ?
            (<div className='seat' onClick={()=>teste()}>
            {seat}
            
        </div>)
        :
        (<div className='seat selected' onClick={()=>teste()}>
        {seat}
       
    </div>)
        }
        </>     
    )
}

