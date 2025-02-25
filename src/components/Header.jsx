import React, { useEffect } from 'react'
import "../styles/Header.css"
import RetroButton from './RetroButton';

export default function Header() {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");

      if (window.scrollY > 0) {
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
    <header id="header" className='retro-font'>
      <a href='/'><img className='logo-page' src="./images/logo.png" alt="Logo page"/></a>

      <nav className='links'>
        <ul>
          <li className='page'><a href='#about' className='retro-color'>ABOUT</a></li>
          <li className='page'><a href='#experience' className='retro-color'>EXPERIENCE</a></li>
          <li className='page'><a href='#courses' className='retro-color'>COURSES</a></li>
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
