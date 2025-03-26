import React from 'react'
import '../styles/Experience.css'
import SectionTitle from '../components/SectionTitle'
import InformationBox from '../components/InformationBox'
import Timeline from '../components/Timeline'

export default function Experience() {

  const jakincode_text_info = "Web applications have been developed using Django (backend) and Vue.js/React.js (frontend). One of the projects developed is a GRC application used for the implementation of ISO 27001 and ENS. Additionally, I led meetings with clients for the maintenance of their applications or the implementation of new functionalities. Also, I mentored junior developers, guiding them in coding best practices."
  const jakincode_technologies=['Python', 'Django', 'Django Rest Framework', 'JavaScript', 'Vue.js', 'React.js', 'Celery', 'Redis', 'Docker']
  
  const revoluz_text_info="Web applications have been developed using Django (backend) and Vue.js/React.js (frontend). The projects developed include an automatic electric bill comparison application and the creation of interactive maps with Leaflet.js. VPS have also been configured for project deployment on Digital Ocean."
  const revoluz_technologies=['Python', 'Django', 'Django Rest Framework', 'JavaScript', 'Vue.js', 'React.js', 'Leaflet.js', 'Docker']

  return (
    <section id="experience">
      <SectionTitle text={'EXPERIENCE'}/>
      
      <Timeline>
        <InformationBox job_title='Full-Stack Software Engineer' date='Dec 2023 - Oct 2024' company='JakinCode' text_info={jakincode_text_info} technologies={jakincode_technologies}/>
        <InformationBox job_title='Full-Stack Software Engineer' date='Feb 2022 - Jun 2023' company='Revoluz Energy Consulting' text_info={revoluz_text_info} technologies={revoluz_technologies}/>
      </Timeline>
      
    </section>
  )
}
