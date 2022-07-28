import Movies from "./Movies"

export default function InitialScreen () {
    return (
        <>
        <div className = 'select'>
            <h3>Selecione o filme</h3>
        </div>
       <Movies />
        </>
    )
}