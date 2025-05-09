import React from 'react'
import '../styles/Education.css'
import SectionTitle from '../components/SectionTitle'
import InformationBox from '../components/InformationBox'

export default function Education() {

  const university_alicante_logo={src: "images/logos/university_alicante.png", name: 'University Alicante'}
  const udemy_logo={src: "images/logos/udemy.png", name: 'Udemy'}
  const coursera_logo={src: "images/logos/coursera.png", name: 'Coursera'}

  const university_text="Provides a comprehensive training in software development, including programming, database design, and system architecture. I gained experience in creating database diagrams and managing databases, as well as using agile methodologies like Scrum, DevOps tools, and software testing practices. Additionally, I developed knowledge in cybersecurity and networking, and honed my project management and teamwork skills through hands-on projects."
  const udemy_text="Covers the complete development of web applications using Django and Django REST Framework. It includes database modeling with Django ORM, creating dynamic views and templates, implementing authentication and authorization, and building RESTful APIs. Additionally, it explores best practices for developing scalable and secure applications, as well as deploying projects to production."
  const coursera_text="Provides a comprehensive introduction to web development with Django, covering everything from fundamental concepts to building fully functional applications. Throughout the course, I learned how to model data using Django ORM, create dynamic views and templates, manage user authentication and authorization, handle form validation, and deploy applications to the cloud."

  const url_university='https://www.ua.es'
  const url_udemy='https://www.udemy.com/course/curso-profesional-de-programacion-web-con-python-y-django/?couponCode=ST22MT240325G1'
  const url_coursera='https://www.coursera.org/specializations/django'


  return (
    <section id="education">
      <SectionTitle text={'EDUCATION'}/>
      
      <InformationBox job_title="Bachelor's degree in Computer Engineering (Software Engineering Specialization)" date='2018 - 2023' company='University of Alicante' text_info={university_text} technologies={[]} image={university_alicante_logo} url={url_university}/>
      
      <div className='margin-box'>
        <InformationBox job_title='Course: Django and Django rest framework from basic to professional' date='Jan 2023' company='Udemy' text_info={udemy_text} technologies={[]} image={udemy_logo} url={url_udemy}/>
      </div>

      <div className='margin-box'>
        <InformationBox job_title='Course: Django for Everybody (University of Michigan)' date='Jul 2024' company='Coursera' text_info={coursera_text} technologies={[]} image={coursera_logo} url={url_coursera}/>
      </div>
    </section>
  )
}
