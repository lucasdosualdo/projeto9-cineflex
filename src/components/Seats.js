import { useState } from 'react';

export default function Seats({seat, available, id, ids, setIds, selectedSeats, setSelectedSeats, key}) {   
    if (available) {
        return (
            <SelectSeats
            seat = {seat}
            id={id}
            ids={ids}
            setIds={setIds}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
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

function SelectSeats ({seat, id, ids, setIds, selectedSeats, setSelectedSeats}) {
    const [select, setSelect]=useState(false);
    console.log(ids, 'seats')
function teste () {
    if (!select) {
        setSelect(!select)
        setIds([...ids, id])
        setSelectedSeats([...selectedSeats, seat])
        console.log(ids, selectedSeats, 'adicionou')
    } else {
        setSelect(!select)
        let newIds=ids.filter((value)=>value!==id)
        setIds([...newIds])
        let newSeats=selectedSeats.filter((value)=>value!==seat)
        setSelectedSeats([...newSeats])
        console.log(ids, selectedSeats, 'retirou')
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