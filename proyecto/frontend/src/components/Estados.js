import React,{useState} from 'react'

function Estados() {
    const[valor,setValor]=useState(5);
    const agregarValor=()=>{
        setValor(valor+1)
        
    }
  return (
    <div>Estados
        <h1>Agregar valor {valor}</h1>
        <button onClick={agregarValor}>Incrementar</button>
    </div>
  )
}

export default Estados