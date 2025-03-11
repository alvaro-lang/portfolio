import React from 'react'
import '../styles/ContactBar.css'
import EmailText from './EmailText'

export default function ContactBar() {
    return (
        <div id="contact-bar">
            <a href="mailto:alvaropers96@gmail.com" className="email-icon retro-color">
                <i className="fa-solid fa-envelope"></i>
                <EmailText/>
            </a>
            <a href="https://github.com/alvaro-lang" target="_blank" rel="noopener noreferrer" className='retro-color'>
                <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/alvaro-pastor-sellers" target="_blank" rel="noopener noreferrer" className='retro-color'>
                <i className="fab fa-linkedin"></i>
            </a>
        </div>  
    )
}
