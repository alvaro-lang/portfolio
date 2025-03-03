import React from 'react'
import '../styles/Presentation.css'
import DownArrow from '../components/DownArrow'

export default function Presentation() {
    return (
        <section id='presentation'>
            <div className='text-container'>
                <div className='title retro-font'>
                    Software
                </div>
                <div className='subtitle retro-font'>
                    Developer
                </div>
                <div className="presentation-text description-text">
                    Hi! I'm <span className='retro-color'>Alvaro</span>. A Software Engineer with 2+ years of experience in <span className='retro-color'>Full-Stack</span> web application development with Python (Django) and JavaScript (Vue.js, React.js).
                </div>
            </div>
            <a href='#about'><DownArrow/></a>
        </section>  
    )
}
