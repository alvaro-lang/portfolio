import React from 'react'
import '../styles/About.css'
import SectionTitle from '../components/SectionTitle'

export default function About() {

    const technologies = [
        { name: "Python", src: "images/tech_logos/python.png" },
        { name: "React", src: "images/tech_logos/react.png" },
        { name: "Vue", src: "images/tech_logos/vue.png" },
        { name: "Django", src: "images/tech_logos/django.png" },
        { name: "JavaScript", src: "images/tech_logos/javascript.png" },
        { name: "CSS3", src: "images/tech_logos/css.png" },
        { name: "HTML5", src: "images/tech_logos/html.png" },
        { name: "Docker", src: "images/tech_logos/docker.png" },
        { name: "Git", src: "images/tech_logos/git.png" },
        { name: "Github", src: "images/tech_logos/github.png" },
        { name: "Gitlab", src: "images/tech_logos/gitlab.png" },
        { name: "MySQL", src: "images/tech_logos/mysql.png" },
        { name: "PostgreSQL", src: "images/tech_logos/postgresql.png" },
        { name: "MongoDB", src: "images/tech_logos/mongo_db.png" },
        { name: "Linux", src: "images/tech_logos/linux.png" },
    ];

    return (
        <section id="about">
            <SectionTitle text={'ABOUT ME'}/>

            <div className='container-text-images'>
                <div className='tech-grid'>
                    {technologies.map((tech, index) => (
                        <div key={index} className="tech-logo">
                            <img src={tech.src} alt={tech.name} />
                            <span className="tooltip retro-font">{tech.name}</span>
                        </div>
                    ))}
                </div>
                <div className='text description-text'>
                    <p className='first-paragraph'>I am a <span className='retro-color'>Full-Stack Software Engineer</span> with experience in building web applications, specializing in <span className='retro-color'>Python (Django)</span> and <span className='retro-color'>JavaScript (Vue.js/React.js)</span>.</p>
                    <p>Throughout my career, I have worked in agile environments (Scrum/Kanban), led client meetings, mentored junior developers, and developed high-performance REST APIs using <span className='retro-color'>Django Rest Framework</span>. I also have experience deploying applications in the cloud with Docker and DigitalOcean, managing databases like PostgreSQL, MySQL and MongoDB, and using tools such as Git, Jira, and Asana.</p>
                    <p>My experience has primarily been in Spain, but I am now based in Dublin, where I continue to expand my knowledge and pursue new opportunities. I am always looking for new challenges to enhance my skills and learn more technologies.</p>
                </div>
            </div>
           

        </section>
    )
}
