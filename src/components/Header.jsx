import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import RetroButton from "./RetroButton";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");

      if (window.scrollY > 10) {
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
    <header id="header" className="retro-font">
      <a href="#presentation">
        <img className="page-logo" src="images/page_logo.png" alt="Logo page" />
      </a>

      <nav className="links">
        <ul>
          <li className="section">
            <a href="#about" className={`retro-color ${activeSection === "about" ? "active" : ""}`}>
                ABOUT
            </a>
          </li>
          <li className="section">
            <a href="#experience" className={`retro-color ${activeSection === "experience" ? "active" : ""}`}>
              EXPERIENCE
            </a>
          </li>
          <li className="section">
            <a href="#education" className={`retro-color ${activeSection === "education" ? "active" : ""}`}>
              EDUCATION
            </a>
          </li>
        </ul>
      </nav>
      <a href="CV_Alvaro_Pastor_Sellers.pdf" download>
        <RetroButton text="RESUME" />
      </a>
    </header>
  );
}
