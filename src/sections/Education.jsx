import React from 'react'
import '../styles/Education.css'
import SectionTitle from '../components/SectionTitle'
import CompanyExperience from '../components/CompanyExperience'
import LogoRotate from '../components/LogoRotate'

export default function Education() {

  const university_alicante_logo={src: "/images/logos/university_alicante.png", name: 'University Alicante'}
  const udemy_logo={src: "/images/logos/udemy.png", name: 'Udemy'}
  const coursera_logo={src: "/images/logos/coursera.png", name: 'Coursera'}

  const university_text="Provides a comprehensive training in software development, including programming, database design, and system architecture. I gained experience in creating database diagrams and managing databases, as well as using agile methodologies like Scrum, DevOps tools, and software testing practices. Additionally, I developed knowledge in cybersecurity and networking, and honed my project management and teamwork skills through hands-on projects."
  const udemy_text="Covers the complete development of web applications using Django and Django REST Framework. It includes database modeling with Django ORM, creating dynamic views and templates, implementing authentication and authorization, and building RESTful APIs. Additionally, it explores best practices for developing scalable and secure applications, as well as deploying projects to production."
  const coursera_text="Provides a comprehensive introduction to web development with Django, covering everything from fundamental concepts to building fully functional applications. Throughout the course, I learned how to model data using Django ORM, create dynamic views and templates, manage user authentication and authorization, handle form validation, and deploy applications to the cloud."

  return (
    <section id="education">
      <SectionTitle text={'EDUCATION'}/>
      
      <div className='box'>
        <LogoRotate image={university_alicante_logo} />
        <CompanyExperience job_title="Bachelor's degree in Computer Engineering (Software Engineering Specialization)" date='2018 - 2023' company='University of Alicante' text_info={university_text} technologies={[]}/>
      </div>
      
      <div className='box'>
        <CompanyExperience job_title='Course: Django and Django rest framework from basic to professional' date='Jan 2023' company='Udemy' text_info={udemy_text} technologies={[]}/>
        <LogoRotate image={udemy_logo} />
      </div>

      <div className='box'>
        <LogoRotate image={coursera_logo} />
        <CompanyExperience job_title='Course: Django for Everybody (University of Michigan)' date='Jul 2024' company='Coursera' text_info={coursera_text} technologies={[]}/>
      </div>
    </section>
  )
}
