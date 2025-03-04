import React from 'react'
import '../styles/Experience.css'
import SectionTitle from '../components/SectionTitle'
import CompanyExperience from '../components/CompanyExperience'

export default function Experience() {

  const jakincode_technologies=['Python', 'Django', 'Vue']
  const revoluz_technologies=['Python', 'Django', 'Vue']

  return (
    <section id="experience">
      <SectionTitle text={'EXPERIENCE'}/>
      
      <div className='container-jakincode'>
        <CompanyExperience job_title='Full-Stack Software Engineer' date='2023 - 2024' company='JakinCode' technologies={jakincode_technologies}/>
      </div>
      <div className='container-revoluz'>
        <CompanyExperience job_title='Full-Stack Software Engineer' date='2022 - 2024' company='Revoluz Energy Consulting' technologies={revoluz_technologies}/>
      </div>
    </section>
  )
}
