import React from 'react'
import '../styles/SectionTitle.css'

export default function SectionTitle({text}) {
    return (
        <div id='section-title' className='retro-font'>
            {text}
        </div>
    )
}
