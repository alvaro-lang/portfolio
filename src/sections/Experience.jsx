import React from 'react'
import '../styles/Experience.css'
import SectionTitle from '../components/SectionTitle'
import CompanyExperience from '../components/CompanyExperience'

export default function Experience() {

  const jakincode_text_info = "I developed web applications using technologies such as Django (backend) and Vue.js and React.js (frontend). One of the projects I developed is a GRC application used for the implementation of ISO 27001 and ENS. Additionally, I led meetings with clients for the maintenance of their applications or the implementation of new functionalities. I also mentored junior developers, guiding them in coding best practices."
  const jakincode_technologies=['Python', 'Django', 'Django Rest Framework', 'JavaScript', 'Vue.js', 'React.js', 'Celery', 'Redis', 'Docker']
  
  const revoluz_text_info="I developed web applications using Django (backend) and Vue.js and React.js (frontend). One of the projects I developed is an automatic electric bill comparison application, and I also created interactive maps using Leaflet.js. Additionally, I configured some VPS to deploy the projects in Digital Ocean."
  const revoluz_technologies=['Python', 'Django', 'Django Rest Framework', 'JavaScript', 'Vue.js', 'React.js', 'Leaflet.js', 'Docker']

  return (
    <section id="experience">
      <SectionTitle text={'EXPERIENCE'}/>
      
      <div className='box container-jakincode'>
        <div className='container-width'>
          <CompanyExperience job_title='Full-Stack Software Engineer' date='2023 - 2024' company='JakinCode' text_info={jakincode_text_info} technologies={jakincode_technologies}/>
        </div>
      </div>
      
      <div className='box container-revoluz'>
        <div className='container-width'>
          <CompanyExperience job_title='Full-Stack Software Engineer' date='2022 - 2024' company='Revoluz Energy Consulting' text_info={revoluz_text_info} technologies={revoluz_technologies}/>
        </div>
      </div>
      
    </section>
  )
}
