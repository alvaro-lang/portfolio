import { useState } from "react"
import React from 'react'
import '../styles/Home.css'

export default function ComponentePrueba() {

    let text = ""

    const [updated, setUpdate] = useState()
    
    const textOnChange = (event) => {
        text = event.target.value
    }
    
    const textUpdated = () =>{
        setUpdate(text)
    }

    return (
        <div id="home">
            <input type="text" onChange={textOnChange}/>
            
            <button onClick={textUpdated}>Actualizar</button>
            <p>Texto updated: {updated}</p>
        </div>
    )
}
