import React from 'react'
import '../styles/About.css'
import SectionTitle from '../components/SectionTitle'

export default function About() {

    const technologies = [
        { name: "React", src: "/images/react_logo.png" },
        { name: "JavaScript", src: "/images/django_logo.png" },
        { name: "CSS", src: "/images/vue_logo.png" },
        { name: "HTML", src: "/images/react_logo.png" },
        { name: "MongoDB", src: "/images/react_logo.png" }
    ];

    return (
        <section id="about">
            <SectionTitle text={'ABOUT ME'}/>

            <div className='container-text-images'>
                <div className='tech-grid'>
                    {technologies.map((tech, index) => (
                        <div key={index} className="tech-logo">
                            <img src={tech.src} alt={tech.name} />
                        </div>
                    ))}
                </div>
                <div className='text description-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

            </div>
           

        </section>
    )
}
