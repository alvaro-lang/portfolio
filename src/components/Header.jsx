import React from 'react'
import "../styles/Header.css"
import { useLocation } from 'react-router-dom';

export default function Header() {

  let location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header id="header">
      <a href='/'><img className='logo-page' src="./images/logo.png" alt="Logo page"/></a>

      <nav className='links'>
        <ul>
          <li className='page'><a className={isActive('/')} href='/'>ABOUT</a></li>
          <li className='page'><a className={isActive('/experience')} href='/experience'>EXPERIENCE</a></li>
          <li className='page'><a className={isActive('/courses')} href='/courses'>COURSES</a></li>
          <li>
            <div className='resume-button'>
              <a href='/CV_Alvaro_Pastor_Sellers.pdf' download>RESUME</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
