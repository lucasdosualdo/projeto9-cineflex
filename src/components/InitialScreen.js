import Movies from "./Movies"

export default function InitialScreen () {
    return (
        <>
        <div className = 'select-movie'>
            <h3>Selecione o filme</h3>
        </div>
       <Movies />
        </>
    )
}