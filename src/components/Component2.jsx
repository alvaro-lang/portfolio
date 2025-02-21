import { useState } from "react"
import React from 'react'

export default function Component2() {

    var text = ""

    const [updated, setUpdate] = useState()
    
    const textOnChange = (event) => {
        text = event.target.value
    }
    
    const textUpdated = () =>{
        setUpdate(text)
    }

    return (
        <div>
            <input type="text" onChange={textOnChange}/>
            
            <button onClick={textUpdated}>Actualizar</button>
            <p>Texto updated: {updated}</p>
        </div>
    )
}
