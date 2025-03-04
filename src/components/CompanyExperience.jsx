import React from 'react'
import '../styles/CompanyExperience.css'

export default function CompanyExperience({job_title, date, company, technologies}) {
  return (
    <div id='company-experience'>
        <div className='date'>
            {date}
        </div>
        <div className='container-text'>
            <div className='job-title white-font'>
                {job_title}
            </div>
            <div className='company'>
                {company}
            </div>
            <div className='text-info'>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className='container-grid white-font'>
                {technologies.map((tech, index) => (
                    <div key={index} className='tags retro-color'>
                        {tech}
                    </div>
                ))}
            </div>
            
        </div>
        
    </div>
  )
}
