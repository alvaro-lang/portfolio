import React, { useEffect } from 'react'
import "../styles/Header.css"
import RetroButton from './RetroButton';

export default function Header() {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");

      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header">
      <a href='/'><img className='logo-page' src="./images/logo.png" alt="Logo page"/></a>

      <nav className='links'>
        <ul>
          <li className='page'><a href='#about'>ABOUT</a></li>
          <li className='page'><a href='#experience'>EXPERIENCE</a></li>
          <li className='page'><a href='#courses'>COURSES</a></li>
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
