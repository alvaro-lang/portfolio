import React from 'react'
import "../styles/Header.css"
import { useLocation } from 'react-router-dom';
import RetroButton from './RetroButton';

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
            <a href='/CV_Alvaro_Pastor_Sellers.pdf' download>
              <RetroButton text="RESUME"/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
