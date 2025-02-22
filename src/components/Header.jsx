import React from 'react'
import "../styles/Header.css"
export default function Header() {
  return (
    <header id="header">
      <nav className='links'>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/projects'>Projects</a></li>
          <li><a href='/courses'>Courses</a></li>
        </ul>
      </nav>
      <div className='resume-button'>
        <a href='/resume'>Resume</a>
      </div>
    </header>
  )
}
