import React from 'react'
import '../styles/Experience.css'
import SectionTitle from '../components/SectionTitle'
import CompanyExperience from '../components/CompanyExperience'

export default function Experience() {

  const jakincode_text_info = "I developed web applications using technologies such as Django for the backend and Vue.js and React.js for the frontend. These applications were designed with a REST API architecture, utilizing Django Rest Framework to build and manage data interactions between the client and the server effectively. Additionally, I led meetings with clients to define maintenance strategies, ensuring that the applications remained up-to-date and continuously improved with new features. I also mentored junior developers, guiding them in best practices and fostering the development of technical skills and the implementation of high-quality coding standards."
  const jakincode_technologies=['Python', 'Django', 'Django Rest Framework', 'JavaScript', 'Vue.js', 'React.js', 'Celery', 'Redis', 'Docker']
  
  const revoluz_text_info="I developed several web applications using Django for the backend and Vue.js and React.js for the frontend. One of my projects includes an automatic electric bill comparison tool, and I also created interactive maps using Leaflet.js. Additionally, I deployed all of my projects in the cloud using a DigitalOcean VPS."
  const revoluz_technologies=['Python', 'Django', 'Django Rest Framework', 'JavaScript', 'Vue.js', 'React.js', 'Leaflet.js']

  return (
    <section id="experience">
      <SectionTitle text={'EXPERIENCE'}/>
      
      <div className='container-jakincode'>
        <div className='container-width'>
          <CompanyExperience job_title='Full-Stack Software Engineer' date='2023 - 2024' company='JakinCode' text_info={jakincode_text_info} technologies={jakincode_technologies}/>
        </div>
      </div>
      
      <div className='container-revoluz'>
        <div className='container-width'>
          <CompanyExperience job_title='Full-Stack Software Engineer' date='2022 - 2024' company='Revoluz Energy Consulting' text_info={revoluz_text_info} technologies={revoluz_technologies}/>
        </div>
      </div>
      
    </section>
  )
}
