import React from 'react'
import '../styles/Presentation.css'
import DownArrow from '../components/DownArrow'
import ContactBar from '../components/ContactBar'

export default function Presentation() {
    return (
        <section id='presentation'>
            <div className='text-container'>
                <div className='title retro-font'>
                    Software
                </div>
                <div className='subtitle retro-font white-font'>
                    Developer
                </div>
                <div className="presentation-text description-text">
                    Hi! I'm <span className='retro-color'>Alvaro</span>. A <span className='retro-color'>Full-Stack Software Developer</span> with 2+ years of experience in web application development with Python (<span className='retro-color'>Django</span>) and JavaScript (<span className='retro-color'>Vue.js, React.js</span>).
                </div>
                <ContactBar/>
            </div>
            <a href='#about'><DownArrow/></a>
        </section>  
    )
}
