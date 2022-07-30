import { useState } from 'react';

export default function Seats({seat, available, id, ids, setIds, key}) {
    
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
    if (!select) {
        setSelect(!select)
        setIds([...ids, id])
        console.log(ids, 'adicionou')
    } else {
        setSelect(!select)
        let newIds=ids.filter((value)=>value!==id)
        setIds([...newIds])
        console.log(ids, 'retirou')
    }
    
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

